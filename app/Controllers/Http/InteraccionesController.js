"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Interaccione_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Interaccione"));
const luxon_1 = require("luxon");
class InteraccionesController {
    async index({}) { }
    async create({}) { }
    async store({ auth, request, response }) {
        try {
            const info = request.only(['vista_id']);
            const now = luxon_1.DateTime.now();
            const date = now.toFormat('yyyy-MM-dd');
            await Interaccione_1.default.create({
                vista_id: info.vista_id,
                usuario_id: auth.user?.id,
                fecha: date,
            });
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: "",
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
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = InteraccionesController;
//# sourceMappingURL=InteraccionesController.js.map