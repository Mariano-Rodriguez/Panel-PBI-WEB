"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const VistasUsuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/VistasUsuario"));
class default_1 extends Seeder_1.default {
    async run() {
        await VistasUsuario_1.default.createMany([
            {
                usuarios_id: 1,
                vistas_id: 1
            },
            {
                usuarios_id: 1,
                vistas_id: 2
            },
            {
                usuarios_id: 1,
                vistas_id: 3
            },
            {
                usuarios_id: 1,
                vistas_id: 4
            },
            {
                usuarios_id: 1,
                vistas_id: 5
            },
            {
                usuarios_id: 1,
                vistas_id: 6
            },
            {
                usuarios_id: 1,
                vistas_id: 7
            },
            {
                usuarios_id: 1,
                vistas_id: 8
            },
            {
                usuarios_id: 1,
                vistas_id: 9
            },
            {
                usuarios_id: 1,
                vistas_id: 10
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=VistaUsuario.js.map