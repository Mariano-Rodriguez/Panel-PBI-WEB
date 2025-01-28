import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PanelesCategoriasPbi from 'App/Models/PanelesCategoriasPbi'
import PanelesPbi from 'App/Models/PanelesPbi'

export default class PanelesCategoriasPbisController {
  public async index({ response }: HttpContextContract) {
    try {
      const pcb = await PanelesCategoriasPbi.all()

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: pcb,
        status: true
      })
    }
    catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async create({ }: HttpContextContract) { }

  public async store({ response, request }: HttpContextContract) {
    try {
      const data = request.only(['nombre', 'descripcion'])

      await PanelesCategoriasPbi.create(data)
      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      }
      )
    }
    catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const data = await PanelesCategoriasPbi.findByOrFail('id', params.id)

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: data,
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async edit({ }: HttpContextContract) { }

  public async getPanelesxCategoria({ response, request }: HttpContextContract) {
    try {
      const requests = request.only(['categoria_pbi_id'])
      const data = await PanelesPbi.query().where('paneles_categorias_pbis_id', requests.categoria_pbi_id)

      return response.ok({
        mensaje: "Se encontro informacion de la categoria",
        data: data,
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async update({ response, params, request }: HttpContextContract) {
    try {
      const requests = request.only(['nombre', 'descripcion'])
      const data = await PanelesCategoriasPbi.findByOrFail('id', params.id)

      data.nombre = requests.nombre
      data.descripcion = requests.descripcion
      data.save()

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      })
    } catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const data = await PanelesCategoriasPbi.findByOrFail('id', params.id)
      data.status = !data.status
      data.save()

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      })
    }
    catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }
}
