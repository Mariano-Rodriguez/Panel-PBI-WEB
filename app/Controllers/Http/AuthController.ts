import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class AuthController {

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')

    // Verifica si el usuario existe
    const user = await Usuario.findBy('email', email)
    if (!user) {
      return response.badRequest({ mensaje: 'Correo Invalido o No Autorizado', permisos: null, token: null, status: false })
    }

    if (user.status == false) {
      return response.badRequest({ mensaje: 'Correo Invalido o No Autorizado', permisos: null, token: null, status: false })
    }

    // Genera el token de autenticación
    const token = await auth.use('api').generate(user)
    const usuario = await Usuario.query().preload('permisos', (permisosQuery) => {
      permisosQuery.preload('vista')
    }).where('id', user.id)

    return response.ok({ mensaje: 'Inicio de Sesión Correcto', token: token.token, permisos: usuario[0].permisos, status: true })
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()
      return response.ok({
        mensaje: "Se cerro sesion correctamente",
        data: null,
        status: true
      })
    }
    catch (e) {
      return response.ok({
        mensaje: "Ocurrio un error al intentar cerrar sesion",
        data: null,
        status: false
      })
    }
  }

  public async index({ }: HttpContextContract) { }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
