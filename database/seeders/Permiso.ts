import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permiso from 'App/Models/Permiso'

export default class extends BaseSeeder {
  public async run () {
    await Permiso.createMany([
      {
        nombre: "Ver Panel de Sellouts",
        vista_id: 1
      },
      {
        nombre: "Ver Panel de Requisiciones",
        vista_id: 2
      },
      {
        nombre: "Ver Avisos",
        vista_id: 3
      },
      {
        nombre: "Ver Usuarios",
        vista_id: 4
      },
      {
        nombre: "Ver Permisos",
        vista_id: 5
      }
    ])
  }
}
