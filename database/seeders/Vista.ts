import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vista from 'App/Models/Vista'

export default class extends BaseSeeder {
  public async run () {
    await Vista.createMany([
      {
        nombre: "Panel de Sellout",
        path: "/dashboard/panel-sellout",
        icon: "trending_up"
      },
      {
        nombre: "Panel Requisiciones",
        path: "/dashboard/panel-requisiciones",
        icon: "note_add"
      },
      {
        nombre: "Avisos",
        path: "/dashboard/avisos",
        icon: "notifications"
      },
      {
        nombre: "Usuarios",
        path: "/dashboard/usuarios",
        icon: "people"
      },
      {
        nombre: "Permisos",
        path: "/dashboard/permisos",
        icon: "lock_open"
      }
    ])
  }
}
