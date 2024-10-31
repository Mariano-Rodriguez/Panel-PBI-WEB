import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vista from 'App/Models/Vista';

export default class VistasController {
  public async index({ response }: HttpContextContract) {
    try {
      const vistas = await Vista.query().where('status', true);

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: vistas,
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

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
