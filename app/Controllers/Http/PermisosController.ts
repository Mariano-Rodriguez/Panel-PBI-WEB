import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permiso from 'App/Models/Permiso'
import Usuario from 'App/Models/Usuario'

export default class PermisosController {
  public async index({ response }: HttpContextContract) {
    try {
      const permisos = await Permiso.query().where('status', true)

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: permisos,
        status: true
      })
    } catch (e) {
      return response.ok({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async indexAll({ response }: HttpContextContract) {
    try {
      const permisos = await Permiso.all()

      return response.json({
        mensaje: "Consulta ejecutada correctamente",
        data: permisos,
        status: true
      })
    } catch (e) {
      return response.json({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async getPermisosUser({ response, params }: HttpContextContract) {
    try {
      const permisosUser = await Usuario.query().preload('permisos').where('id', params.id)

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: permisosUser,
        status: true
      })
    } catch (e) {
      return response.ok({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async create({ }: HttpContextContract) { }

  public async store({ response, request }: HttpContextContract) {
    try {
      const data = request.only(['nombre', 'vista_id'])

      await Permiso.create(data)
      return response.ok({
        mensaje: "Se inserto la informacion correctamente",
        data: null,
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const permiso = await Permiso.findByOrFail('id', params.id)

      return response.ok({
        mensaje: "Se encontro la informacion correctamente",
        data: permiso,
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ params, response, request }: HttpContextContract) {
    try {
      const data = request.only(['nombre', 'vista_id'])
      const permiso = await Permiso.findByOrFail('id', params.id)

      permiso.nombre = data.nombre
      permiso.vista_id = data.vista_id
      permiso.save()

      return response.ok({
        mensaje: "Se modifico la informacion correctamente",
        data: null,
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      var permiso = await Permiso.findByOrFail('id', params.id)
      permiso.status = !permiso.status
      permiso.save()

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
