"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Permiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permiso"));
class default_1 extends Seeder_1.default {
    async run() {
        await Permiso_1.default.createMany([
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
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Permiso.js.map