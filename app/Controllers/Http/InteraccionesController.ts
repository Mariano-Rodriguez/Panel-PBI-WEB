import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Interaccione from 'App/Models/Interaccione';
import { DateTime } from 'luxon';

export default class InteraccionesController {
  public async index({ response }: HttpContextContract) {
    try
    {
      /*const conteos = await Database
        .from('interacciones')
        .select('vista_id', 'usuario_id', 'fecha')
        .count('* as total')
        .groupBy('vista_id', 'usuario_id', 'fecha');*/

      const conteos = await Database
        .from('interacciones')
        .join('vistas', 'vistas.id', 'interacciones.vista_id')
        .select('vista_id', 'fecha', 'vistas.nombre')
        .count('* as total')
        .groupBy('vista_id', 'fecha');

      response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: conteos,
        status: true
      })
    } catch(e){
      return response.ok({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
      })
    }
  }

  public async InteXUsuario({ response }: HttpContextContract){
    try{
      const conteos = await Database
        .from('interacciones')
        .join('usuarios', 'usuarios.id', 'usuario_id')
        .join('vistas', 'vistas.id', 'vista_id')
        .select('vista_id', 'usuario_id', 'usuarios.email', 'vistas.nombre', 'fecha')
        .count('* as total')
        .groupBy('vista_id', 'usuario_id', 'fecha');

        response.ok({
          mensaje: "Consulta ejecutada correctamente",
          data: conteos,
          status: true
        })
    } catch(e){
        return response.ok({
         mensaje: "Ocurrio un error",
         data: null,
         status: false
        })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response, auth}: HttpContextContract) {
    try
    {
      const info = request.only(['vista_id'])
      const now = DateTime.now();
      const date = now.toFormat('yyyy-MM-dd');

      await Interaccione.create({
        vista_id: info.vista_id,
        usuario_id: auth.user?.id,
        fecha: date,
      })

      return response.ok({
        mensaje: "Consulta ejecutada correctamente",
        data: "",
        status: true
      })
    } catch(e){
      return response.ok({
        mensaje: "Ocurrio un error",
        data: null,
        status: false
       })
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
