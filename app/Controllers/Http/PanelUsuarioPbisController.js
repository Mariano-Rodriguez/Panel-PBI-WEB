"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PanelesPbi_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PanelesPbi"));
const PanelUsuarioPbi_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PanelUsuarioPbi"));
class PanelUsuarioPbisController {
    async index({ response }) {
        try {
            const data = await PanelUsuarioPbi_1.default.query().preload('panel').preload('usuario');
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
    async getPanelesxUsuariosxCategoria({ response, request }) {
        try {
            const requests = request.only(['categoria_pbi_id']);
            const data = await PanelUsuarioPbi_1.default.query().preload('panel', (panelQuery) => {
                panelQuery.where('paneles_categorias_pbis_id', requests.categoria_pbi_id);
            }).preload('usuario');
            const filteredData = data.filter((item) => item.panel !== null);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: filteredData,
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
    async getPanelesxCategoria({ response, request }) {
        try {
            const requests = request.only(['categoria_pbi_id']);
            const data = await PanelesPbi_1.default.query().where('categoria_pbi_id', requests.categoria_pbi_id);
            return response.ok({
                mensaje: "Se encontro informacion de la categoria",
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
    async store({ request, response }) {
        try {
            const info = request.only(['paneles_pbis_id', 'usuario_id']);
            await PanelUsuarioPbi_1.default.create(info);
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
        try {
            const categoria_id = request.input('paneles_categorias_pbis_id');
            const data = await PanelUsuarioPbi_1.default.query().where('usuario_id', auth.user.id).preload('panel', (panelQuery) => {
                panelQuery.where('categoria_pbi_id', categoria_id);
            });
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
    async show({ response, params }) {
        try {
            const data = await PanelUsuarioPbi_1.default.query().where('id', params.id);
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
            const data = await PanelUsuarioPbi_1.default.findByOrFail('id', params.id);
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
    async destroy({ params, response }) {
        try {
            const data = await PanelUsuarioPbi_1.default.findByOrFail('id', params.id);
            data.delete();
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
}
exports.default = PanelUsuarioPbisController;
//# sourceMappingURL=PanelUsuarioPbisController.js.map