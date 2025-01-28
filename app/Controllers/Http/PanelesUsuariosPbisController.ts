import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PanelesUsuariosPbi from 'App/Models/PanelesUsuariosPbi'

export default class PanelesUsuariosPbisController {
  public async index({ response }: HttpContextContract) {
    try
    {
      const data = await PanelesUsuariosPbi.query().preload('panel').preload('usuario')

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

  public async getPanelesxUsuariosxCategoria({ response, request }: HttpContextContract){
    try{
      const requests = request.only(['categoria_pbi_id'])
      const data = await PanelesUsuariosPbi.query().preload('panel', (panelQuery) => {
        panelQuery.where('paneles_categorias_pbis_id', requests.categoria_pbi_id)
      }).preload('usuario')

      // Filtrar registros donde panel no sea null
      const filteredData = data.filter((item) => item.panel !== null)
      
      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: filteredData,
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

  public async create({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    try{
      const info = request.only(['paneles_pbis_id', 'usuario_id'])

      await PanelesUsuariosPbi.create(info)
      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      }
      )
    }catch(e){
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async obtenerPaneles({ auth, response, request }: HttpContextContract) {
    //try{
      const categoria_id = request.input('paneles_categorias_pbis_id')
      const data = await PanelesUsuariosPbi.query().where('usuario_id', auth.user!.id).preload('panel' , (panelQuery) => {
        panelQuery.where('paneles_categorias_pbis_id', categoria_id)
      })
      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: data,
        status: true
      })
    /*} catch(e){
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }*/
  }

  public async show({params, response}: HttpContextContract) {
    try {
      const data = await PanelesUsuariosPbi.query().where('id', params.id)

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

  public async edit({}: HttpContextContract) {}

  public async update({request, params, response}: HttpContextContract) {
    try{
      const info = request.only(['paneles_pbis_id', 'usuario_id'])
      const data = await PanelesUsuariosPbi.findByOrFail('id', params.id)

      data.paneles_pbis_id = info.paneles_pbis_id
      data.usuario_id=info.usuario_id
      data.save()

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      }
      )
    }catch(e){
      return response.badRequest({
        mensaje: "Consulta no ejecutada correctamente",
        data: "",
        status: false
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const data = await PanelesUsuariosPbi.findByOrFail('id', params.id)
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
