"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vista_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Vista"));
class VistasController {
    async index({ response }) {
        try {
            const vistas = await Vista_1.default.query().where('status', true);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: vistas,
                status: true
            });
        }
        catch (e) {
            return response.ok({
                mensaje: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = VistasController;
//# sourceMappingURL=VistasController.js.map