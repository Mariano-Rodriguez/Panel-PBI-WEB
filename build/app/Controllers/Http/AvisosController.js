"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aviso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Aviso"));
const dayjs_1 = __importDefault(require("dayjs"));
class AvisosController {
    async index({ response }) {
        const fechaFormateada = (0, dayjs_1.default)().format('YYYY/MM/DD');
        const data = await Aviso_1.default.query().where('fecha_vigencia', '>', fechaFormateada).where('status', true);
        return response.ok({
            mensaje: "Se ejecuto correctamente",
            data: data,
            status: true
        });
    }
    async indexAll({ response }) {
        const data = await Aviso_1.default.all();
        return response.ok({
            mensaje: "Se ejecuto correctamente",
            data: data,
            status: true
        });
    }
    async create({}) { }
    async store({ response, request }) {
        try {
            const data = request.all();
            await Aviso_1.default.create(data);
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
    async show({ params, response }) {
        try {
            const data = await Aviso_1.default.findByOrFail('id', params.id);
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
    async update({ params, response, request }) {
        try {
            const requests = request.only(['titulo', 'descripcion', 'img_path', 'fecha_vigencia']);
            const data = await Aviso_1.default.findByOrFail('id', params.id);
            data.titulo = requests.titulo;
            data.descripcion = requests.descripcion;
            data.img_path = requests.img_path;
            data.fecha_vigencia = requests.fecha_vigencia;
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
    async changeStatus({ response, params }) {
        const data = await Aviso_1.default.findByOrFail('id', params.id);
        data.status = !data.status;
        data.save();
        return response.ok({
            mensaje: "Consulta ejecutada correctamente",
            data: "",
            status: true
        });
    }
    async destroy({ response, params }) {
        try {
            const data = await Aviso_1.default.findByOrFail('id', params.id);
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
exports.default = AvisosController;
//# sourceMappingURL=AvisosController.js.map