"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PanelesPbi_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PanelesPbi"));
class PanelesPbisController {
    async index({ response }) {
        try {
            const pcb = await PanelesPbi_1.default.all();
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: pcb,
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
            const data = request.only(['nombre', 'descripcion', 'url_panel', 'paneles_categorias_pbis_id']);
            await PanelesPbi_1.default.create(data);
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
    async show({ response, params }) {
        try {
            const data = await PanelesPbi_1.default.findByOrFail('id', params.id);
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
            const dataR = request.only(['nombre', 'descripcion', 'url_panel', 'paneles_categorias_pbis_id']);
            const data = await PanelesPbi_1.default.findByOrFail('id', params.id);
            data.nombre = dataR.nombre;
            data.descripcion = dataR.descripcion;
            data.url_panel = dataR.url_panel;
            data.paneles_categorias_pbis_id = dataR.paneles_categorias_pbis_id;
            data.save();
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
    async destroy({ params, response }) {
        try {
            const data = await PanelesPbi_1.default.findByOrFail('id', params.id);
            data.status = !data.status;
            data.save();
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
}
exports.default = PanelesPbisController;
//# sourceMappingURL=PanelesPbisController.js.map