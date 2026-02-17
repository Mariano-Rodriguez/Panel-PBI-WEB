"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
const VistasUsuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/VistasUsuario"));
class VistaUsuariosController {
    async index({ response }) {
        try {
            const data = await VistasUsuario_1.default.all();
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
    async vistaUsuarios({ response, params }) {
        try {
            const vistasUsuarios = await VistasUsuario_1.default.query().where('usuarios_id', params.id);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: vistasUsuarios,
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
    async store({ request, response }) {
        const vista_usuarioSchema = Validator_1.schema.create({
            vistas_id: Validator_1.schema.number(),
            usuarios_id: Validator_1.schema.number()
        });
        const payload = await request.validate({ schema: vista_usuarioSchema });
        await VistasUsuario_1.default.create(payload);
        return response.ok({
            mensaje: "Se inserto correctamente el registro",
            data: payload,
            status: true
        });
    }
    async show({ params, response }) {
        try {
            const data = await VistasUsuario_1.default.findByOrFail("id", params.id);
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
    async asignarVistas({ request, response }) {
        try {
            const data = request.only(['usuario_id', 'vistas_id']);
            const usuario = await Usuario_1.default.findByOrFail('id', data.usuario_id);
            await usuario.related('vistas').sync(data.vistas_id);
            return response.ok({
                mensaje: "Se actualizarón los permisos correctamente",
                data: null,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensage: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async update({ params, response, request }) {
        try {
            const data = await VistasUsuario_1.default.findByOrFail("id", params.id);
            const info = request.only(['vistas_id', 'usuarios_id']);
            data.vistas_id = info.vistas_id;
            data.usuarios_id = info.usuarios_id;
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
            const data = await VistasUsuario_1.default.findByOrFail("id", params.id);
            data.delete();
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
exports.default = VistaUsuariosController;
//# sourceMappingURL=VistaUsuariosController.js.map