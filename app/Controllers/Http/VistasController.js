"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
const Vista_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Vista"));
class VistasController {
    async index({ response }) {
        try {
            const data = await Vista_1.default.all();
            return response.ok({
                response: "Se ejecuto correctamente la consulta",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                response: "Ocurrio un error en la respuesta",
                data: [],
                status: false
            });
        }
    }
    async vistasActivas({ response, params }) {
        try {
            const usuario = await Usuario_1.default.findBy('id', params.id);
            const rol = usuario.rol_id;
            const restricciones = {
                2: [1, 2, 3],
                3: [1, 2, 3, 4, 5],
            };
            let query = Vista_1.default.query().where('status', true);
            if (restricciones[rol]) {
                query = query.whereNotIn('categorias_id', restricciones[rol]);
            }
            const data = await query;
            return response.ok({
                response: "Se ejecutó correctamente la consulta",
                data,
                status: true,
            });
        }
        catch (e) {
            console.error(e);
            return response.badRequest({
                mensaje: "Ocurrió un error en la búsqueda",
                data: [],
                status: false
            });
        }
    }
    async store({ request, response }) {
        const vistaSchema = Validator_1.schema.create({
            nombre: Validator_1.schema.string(),
            icono: Validator_1.schema.string(),
            ruta: Validator_1.schema.string(),
            nivel: Validator_1.schema.number(),
            categorias_id: Validator_1.schema.number()
        });
        const payload = await request.validate({ schema: vistaSchema });
        await Vista_1.default.create(payload);
        return response.ok({
            mensaje: "Se inserto correctamente el registro",
            data: payload,
            status: true
        });
    }
    async show({ params, response }) {
        try {
            const data = await Vista_1.default.findByOrFail("id", params.id);
            return response.ok({
                mensaje: "Se encontro correctamente el registro",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "No se encontro el registro",
                data: [],
                status: false
            });
        }
    }
    async update({ params, response, request }) {
        try {
            const data = await Vista_1.default.findByOrFail("id", params.id);
            const info = request.only(['nombre', 'icono', 'ruta', 'nivel', 'categorias_id', 'status']);
            data.nombre = info.nombre;
            data.icono = info.icono;
            data.ruta = info.ruta;
            data.nivel = info.nivel;
            data.categorias_id = info.categorias_id;
            data.status = info.status;
            data.save();
            return response.ok({
                mensaje: "Se actualizo correctamente el registro",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "No se actualizo el registro",
                data: [],
                status: false
            });
        }
    }
    async destroy({ params, response }) {
        try {
            const data = await Vista_1.default.findByOrFail("id", params.id);
            data.status = !data.status;
            data.save();
            return response.ok({
                mensaje: "Se desactivo correctamente el registro",
                data: data,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "No se desactivo el registro",
                data: [],
                status: false
            });
        }
    }
}
exports.default = VistasController;
//# sourceMappingURL=VistasController.js.map