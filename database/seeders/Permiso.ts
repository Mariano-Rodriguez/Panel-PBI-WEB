import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permiso from 'App/Models/Permiso'

export default class extends BaseSeeder {
  public async run () {
    await Permiso.createMany([
      {
        nombre: "Ver Panel de Sellouts",
        vista_id: 2
      },
      {
        nombre: "Ver Panel de Requisiciones",
        vista_id: 3
      },
      {
        nombre: "Ver Avisos",
        vista_id: 4
      },
      {
        nombre: "Ver Usuarios",
        vista_id: 5
      },
      {
        nombre: "Ver Permisos",
        vista_id: 6
      },
      {
        nombre: "Ver Interacciones",
        vista_id: 9
      },
      {
        nombre: "Ver Categorias PBI",
        vista_id: 10
      },
      {
        nombre: "Ver Paneles PBI",
        vista_id: 11
      },
      {
        nombre: "Ver Asignaciones Paneles PBI",
        vista_id: 12
      },
      {
        nombre: "Ver Sell In Digital Mercado Libre",
        vista_id: 13
      },
      {
        nombre: "Ver Reportes TDC",
        vista_id: 14
      },
      {
        nombre: "Ver Sell In Digital Shopify",
        vista_id: 15
      },
      {
        nombre: "Ver Sandbox",
        vista_id: 16
      },
      {
        nombre: "Ver 13 Semanas",
        vista_id: 17
      }
    ])
  }
}
