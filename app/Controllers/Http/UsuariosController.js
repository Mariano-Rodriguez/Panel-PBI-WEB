"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class UsuariosController {
    async index({ response }) {
        try {
            const data = await Usuario_1.default.query().preload('rol').preload('vistasU');
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
    async info_usuario({ response, auth }) {
        try {
            const data = await Usuario_1.default.query().where('id', auth.user.id);
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
    async solo_activos({ response }) {
        try {
            const data = await Usuario_1.default.query().preload('rol').preload('vistasU').where('status', true);
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
    async store({ request, response }) {
        const usuarioSchema = Validator_1.schema.create({
            email: Validator_1.schema.string(),
            rol_id: Validator_1.schema.number()
        });
        const payload = await request.validate({ schema: usuarioSchema });
        await Usuario_1.default.create(payload);
        return response.ok({
            mensaje: "Se inserto correctamente el registro",
            data: payload,
            status: true
        });
    }
    async show({ params, response }) {
        try {
            const data = await Usuario_1.default.findByOrFail("id", params.id);
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
            const data = await Usuario_1.default.findByOrFail("id", params.id);
            const info = request.only(['nombre', 'email', 'rol_id', 'status']);
            data.nombre = info.nombre;
            data.email = info.email;
            data.rol_id = info.rol_id;
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
            const data = await Usuario_1.default.findByOrFail("id", params.id);
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
exports.default = UsuariosController;
//# sourceMappingURL=UsuariosController.js.map