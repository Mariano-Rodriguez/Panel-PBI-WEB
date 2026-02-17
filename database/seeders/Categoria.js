"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Categoria_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Categoria"));
class default_1 extends Seeder_1.default {
    async run() {
        await Categoria_1.default.createMany([
            {
                id: 1,
                nombre: 'Administración del Sistema',
                icono: 'assignment',
                nivel: 1,
            },
            {
                id: 2,
                nombre: 'Administración de Paneles PBI',
                icono: 'dashboard',
                nivel: 1
            },
            {
                id: 3,
                nombre: 'Sandbox',
                icono: 'code',
                nivel: 1
            },
            {
                id: 4,
                nombre: 'Administración de Usuarios',
                icono: 'assignment_ind',
                nivel: 1
            },
            {
                id: 5,
                nombre: 'Reportes',
                icono: 'donut_small',
                nivel: 1
            },
            {
                id: 6,
                nombre: 'Ventas',
                icono: 'store',
                nivel: 1
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Categoria.js.map