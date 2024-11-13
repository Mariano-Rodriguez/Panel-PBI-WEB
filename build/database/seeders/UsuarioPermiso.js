"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const UsuarioPermiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UsuarioPermiso"));
class default_1 extends Seeder_1.default {
    async run() {
        await UsuarioPermiso_1.default.createMany([
            {
                usuario_id: 1,
                permiso_id: 4
            },
            {
                usuario_id: 1,
                permiso_id: 5
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=UsuarioPermiso.js.map