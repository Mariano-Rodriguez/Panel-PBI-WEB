"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriasPbi_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CategoriasPbi"));
class CategoriasPbisController {
    async index({ response }) {
        try {
            const pcb = await CategoriasPbi_1.default.all();
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
    async solo_activos({ response }) {
        try {
            const pcb = await CategoriasPbi_1.default.query().where('status', true);
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
    async store({ response, request }) {
        try {
            const data = request.only(['nombre', 'descripcion']);
            await CategoriasPbi_1.default.create(data);
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
            const data = await CategoriasPbi_1.default.findByOrFail('id', params.id);
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
    async update({ response, params, request }) {
        try {
            const requests = request.only(['nombre', 'descripcion']);
            const data = await CategoriasPbi_1.default.findByOrFail('id', params.id);
            data.nombre = requests.nombre;
            data.descripcion = requests.descripcion;
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
    async destroy({ response, params }) {
        try {
            const data = await CategoriasPbi_1.default.findByOrFail('id', params.id);
            data.status = !data.status;
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
exports.default = CategoriasPbisController;
//# sourceMappingURL=CategoriasPbisController.js.map