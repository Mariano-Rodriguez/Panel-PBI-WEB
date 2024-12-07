import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PanelesPbi from 'App/Models/PanelesPbi'

export default class PanelesPbisController {
  public async index({ response }: HttpContextContract) {
    try {
      const pcb = await PanelesPbi.all()

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
      const data = request.only(['nombre', 'descripcion', 'url_panel', 'paneles_categorias_pbis_id'])

      await PanelesPbi.create(data)

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      }
      )
    } catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const data = await PanelesPbi.findByOrFail('id', params.id)
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

  public async update({ request, params, response }: HttpContextContract) {
    try{
      const dataR = request.only(['nombre', 'descripcion', 'url_panel', 'paneles_categorias_pbis_id'])

      const data = await PanelesPbi.findByOrFail('id', params.id)

      data.nombre=dataR.nombre
      data.descripcion=dataR.descripcion
      data.url_panel=dataR.url_panel
      data.paneles_categorias_pbis_id=dataR.paneles_categorias_pbis_id

      data.save()
      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: data,
        status: true
      })
    }catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
   }

  public async destroy({ params, response }: HttpContextContract) { 
    try
    {
      const data = await PanelesPbi.findByOrFail('id', params.id)
      data.status=!data.status
      data.save()

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
}
