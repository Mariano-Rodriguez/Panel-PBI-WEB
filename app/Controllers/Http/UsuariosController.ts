import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
  public async index({ response }: HttpContextContract) {
    try {
      const usuarios = await Usuario.query().preload('permisos', (permisosQuery) => {
        permisosQuery.preload('vista')
      })

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: usuarios,
        status: true
      })
    }
    catch (e) {
      return response.ok({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async create({ }: HttpContextContract) { }

  public async store({ response, request }: HttpContextContract) {
    const usuario = request.only(["email"])
    await Usuario.create(usuario)

    return response.ok({
      mensaje: "Se Inserto Correctamente",
      data: null,
      status: true
    })
  }

  public async usuariosPermisos({response, auth}: HttpContextContract) {
    try {
      const usuario = await Usuario.query().preload('permisos', (permisosQuery) => {
        permisosQuery.preload('vista').where('status', true)
      }).where('id', auth.user!.id)

      return response.ok({
        mensaje: 'Se encontro la informacion correctamente',
        data: usuario,
        status: true
      })
    }
    catch (e) {
      return response.badRequest({
        mensaje: 'No se encontro la informacion',
        data: null,
        status: false
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const usuario = await Usuario.query().preload('permisos', (permisosQuery) => {
        permisosQuery.preload('vista')
      }).where('id', params.id)

      return response.ok({
        mensaje: 'Se encontro la informacion correctamente',
        data: usuario,
        status: true
      })
    }
    catch (e) {
      return response.badRequest({
        mensaje: 'No se encontro la informacion',
        data: null,
        status: false
      })
    }
  }

  public async asignarPermisos({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['usuario_id', 'permisos'])

      const usuario = await Usuario.findByOrFail('id', data.usuario_id)
      await usuario.related('permisos').sync(data.permisos)

      return response.ok({
        mensaje: "Se actualizarón los permisos correctamente",
        data: null,
        status: true
      })

    } catch (e) {
      return response.badRequest({
        mensage: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      var usuario = await Usuario.findByOrFail('id', params.id)
      usuario.status = !usuario.status
      usuario.save()

      return response.ok({
        mensaje: "Se actualizarón los accesos correctamente",
        data: null,
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensage: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }
}
