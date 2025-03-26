import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vista from 'App/Models/Vista'

export default class extends BaseSeeder {
  public async run () {
    await Vista.createMany([
      {
        id: 1,
        nombre: "Sellout",
        path: "/dashboard/panel-sellout",
        icon: "trending_up"
      },
      {
        id: 3,
        nombre: "Avisos",
        path: "/dashboard/avisos",
        icon: "notifications"
      },
      {
        id: 4,
        nombre: "Usuarios",
        path: "/dashboard/usuarios",
        icon: "people"
      },
      {
        id: 5,
        nombre: "Permisos",
        path: "/dashboard/permisos",
        icon: "lock_open"
      },
      {
        id: 9,
        nombre: "Interacciones",
        path: "/dashboard/interacciones",
        icon: "donut_small"
      },
      {
        id: 10,
        nombre: "Categorias PBI",
        path: "/dashboard/categorias-pbi",
        icon: "group_work"
      },
      {
        id: 11,
        nombre: "Paneles PBI",
        path: "/dashboard/paneles-pbi",
        icon: "tab"
      },
      {
        id: 12,
        nombre: "Asignación PanelesPBI",
        path: "/dashboard/paneles-usuarios",
        icon: "how_to_reg"
      },
      {
        id: 13,
        nombre: "Sell In Digital - Mercado Libre",
        path: "/dashboard/panel-sell-in-digital",
        icon: "tab"
      },
      {
        id: 14,
        nombre: "Reportes TDC",
        path: "/dashboard/reportes-tdc",
        icon: "credit_card"
      },
      {
        id: 15,
        nombre: "Sell In Digital - Shopify",
        path: "/dashboard/panel-sell-in-digital-shopify",
        icon: "settings_cell"
      },
      {
        id: 16,
        nombre: "Sandbox",
        path: "/dashboard/sandbox",
        icon: "assignment_late"
      },
      {
        id: 17,
        nombre: "Proyección 13 Semanas",
        path: "/dashboard/proyeccion-13-semanas",
        icon: "swap_vert"
      }
    ])
  }
}
