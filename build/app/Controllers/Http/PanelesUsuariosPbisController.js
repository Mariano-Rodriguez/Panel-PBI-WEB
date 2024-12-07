"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PanelesUsuariosPbi_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PanelesUsuariosPbi"));
class PanelesUsuariosPbisController {
    async index({ response }) {
        try {
            const data = await PanelesUsuariosPbi_1.default.query().preload('panel').preload('usuario');
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Consulta no ejecutada correctamente",
                data: "",
                status: false
            });
        }
    }
    async create({}) { }
    async store({ response, request }) {
        try {
            const info = request.only(['paneles_pbis_id', 'usuario_id']);
            await PanelesUsuariosPbi_1.default.create(info);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: "",
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Consulta no ejecutada correctamente",
                data: "",
                status: false
            });
        }
    }
    async obtenerPaneles({ auth, response, request }) {
        const categoria_id = request.input('paneles_categorias_pbis_id');
        const data = await PanelesUsuariosPbi_1.default.query().where('usuario_id', auth.user.id).preload('panel', (panelQuery) => {
            panelQuery.where('paneles_categorias_pbis_id', categoria_id);
        });
        return response.ok({
            mensaje: "Consulta ejecutada correctamente",
            data: data,
            status: true
        });
    }
    async show({ params, response }) {
        try {
            const data = await PanelesUsuariosPbi_1.default.query().where('id', params.id);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Consulta no ejecutada correctamente",
                data: "",
                status: false
            });
        }
    }
    async edit({}) { }
    async update({ request, params, response }) {
        try {
            const info = request.only(['paneles_pbis_id', 'usuario_id']);
            const data = await PanelesUsuariosPbi_1.default.findByOrFail('id', params.id);
            data.paneles_pbis_id = info.paneles_pbis_id;
            data.usuario_id = info.usuario_id;
            data.save();
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: "",
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Consulta no ejecutada correctamente",
                data: "",
                status: false
            });
        }
    }
    async destroy({}) { }
}
exports.default = PanelesUsuariosPbisController;
//# sourceMappingURL=PanelesUsuariosPbisController.js.map