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
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Vista.js.map