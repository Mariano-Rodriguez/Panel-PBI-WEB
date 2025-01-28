import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aviso from 'App/Models/Aviso'
import dayjs from 'dayjs';

export default class AvisosController {
  public async index({ response }: HttpContextContract) {
    const fechaFormateada = dayjs().format('YYYY/MM/DD');
    //console.log(fechaFormateada); // Ejemplo: 27/01/2025

    const data = await Aviso.query().where('fecha_vigencia', '>', fechaFormateada).where('status', true)
    return response.ok({
      mensaje: "Se ejecuto correctamente",
      data: data,
      status: true
    })
  }

  public async indexAll({ response }: HttpContextContract) {
    const data = await Aviso.all()
    return response.ok({
      mensaje: "Se ejecuto correctamente",
      data: data,
      status: true
    })
  }

  public async create({ }: HttpContextContract) { }

  public async store({ response, request }: HttpContextContract) {
    try {
      const data = request.all()

      await Aviso.create(data)
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

  public async show({ params, response }: HttpContextContract) {
    try {
      const data = await Aviso.findByOrFail('id', params.id)

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

  public async update({ params, response, request }: HttpContextContract) {
    try {
      const requests = request.only(['titulo', 'descripcion', 'img_path', 'fecha_vigencia'])
      const data = await Aviso.findByOrFail('id', params.id)

      data.titulo = requests.titulo
      data.descripcion = requests.descripcion
      data.img_path = requests.img_path
      data.fecha_vigencia = requests.fecha_vigencia

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

  public async changeStatus({ response, params }: HttpContextContract) {
    //try {
    const data = await Aviso.findByOrFail('id', params.id)
    data.status = !data.status
    data.save()

    return response.ok({
      mensaje: "Consulta ejecutada correctamente",
      data: "",
      status: true
    })
    //}
    /*catch (e) {
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }*/
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const data = await Aviso.findByOrFail('id', params.id)
      data.delete()
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
