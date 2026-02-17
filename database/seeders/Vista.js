"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Vista_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Vista"));
class default_1 extends Seeder_1.default {
    async run() {
        await Vista_1.default.createMany([
            {
                id: 1,
                nombre: 'Categorías',
                icono: 'widgets',
                ruta: '/administracion_del_sistema/categorias',
                nivel: 1,
                categorias_id: 1
            },
            {
                id: 2,
                nombre: 'Vistas',
                icono: 'developer_board',
                ruta: '/administracion_del_sistema/vistas',
                nivel: 1,
                categorias_id: 1
            },
            {
                id: 3,
                nombre: 'Roles',
                icono: 'lock',
                ruta: '/administracion_de_usuarios/roles',
                nivel: 1,
                categorias_id: 4
            },
            {
                id: 4,
                nombre: 'Usuarios',
                icono: 'face',
                ruta: '/administracion_de_usuarios/usuarios',
                nivel: 1,
                categorias_id: 4
            },
            {
                id: 5,
                nombre: 'Categorias PBI',
                icono: 'table_chart',
                ruta: '/administracion_pbi/categorias_pbi',
                nivel: 1,
                categorias_id: 2
            },
            {
                id: 6,
                nombre: 'Paneles PBI',
                icono: 'filter_drama',
                ruta: '/administracion_pbi/paneles_pbi',
                nivel: 1,
                categorias_id: 2
            },
            {
                id: 7,
                nombre: 'Sandbox Sell Out',
                icono: 'trending_up',
                ruta: '/sandbox/sandbox_sell_out',
                nivel: 1,
                categorias_id: 3
            },
            {
                id: 8,
                nombre: 'Interacciones',
                icono: 'group',
                ruta: '/reportes/interacciones',
                nivel: 1,
                categorias_id: 5
            },
            {
                id: 9,
                nombre: 'Sell Out',
                icono: 'trending_up',
                ruta: '/ventas/sell_out',
                nivel: 1,
                categorias_id: 6
            },
            {
                id: 10,
                nombre: 'Sell In',
                icono: 'home',
                ruta: '/ventas/sell_in',
                nivel: 1,
                categorias_id: 6
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Vista.js.map