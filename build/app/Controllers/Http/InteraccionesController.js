"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Interaccione_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Interaccione"));
const luxon_1 = require("luxon");
class InteraccionesController {
    async index({ response }) {
        try {
            const conteos = await Database_1.default
                .from('interacciones')
                .join('vistas', 'vistas.id', 'interacciones.vista_id')
                .select('vista_id', 'fecha', 'vistas.nombre')
                .count('* as total')
                .groupBy('vista_id', 'fecha');
            response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: conteos,
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
    async InteXUsuario({ response }) {
        try {
            const conteos = await Database_1.default
                .from('interacciones')
                .join('usuarios', 'usuarios.id', 'usuario_id')
                .join('vistas', 'vistas.id', 'vista_id')
                .select('vista_id', 'usuario_id', 'usuarios.email', 'vistas.nombre', 'fecha')
                .count('* as total')
                .groupBy('vista_id', 'usuario_id', 'fecha');
            response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: conteos,
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
    async store({ request, response, auth }) {
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