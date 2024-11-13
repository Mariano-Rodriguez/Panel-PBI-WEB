"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class UsuariosController {
    async index({ response }) {
        try {
            const usuarios = await Usuario_1.default.query().preload('permisos', (permisosQuery) => {
                permisosQuery.preload('vista');
            });
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: usuarios,
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
    async store({ response, request }) {
        const usuario = request.only(["email"]);
        await Usuario_1.default.create(usuario);
        return response.ok({
            mensaje: "Se Inserto Correctamente",
            data: null,
            status: true
        });
    }
    async usuariosPermisos({ response, auth }) {
        try {
            const usuario = await Usuario_1.default.query().preload('permisos', (permisosQuery) => {
                permisosQuery.preload('vista').where('status', true);
            }).where('id', auth.user.id);
            return response.ok({
                mensaje: 'Se encontro la informacion correctamente',
                data: usuario,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: 'No se encontro la informacion',
                data: null,
                status: false
            });
        }
    }
    async show({ response, params }) {
        try {
            const usuario = await Usuario_1.default.query().preload('permisos', (permisosQuery) => {
                permisosQuery.preload('vista');
            }).where('id', params.id);
            return response.ok({
                mensaje: 'Se encontro la informacion correctamente',
                data: usuario,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: 'No se encontro la informacion',
                data: null,
                status: false
            });
        }
    }
    async asignarPermisos({ request, response }) {
        try {
            const data = request.only(['usuario_id', 'permisos']);
            const usuario = await Usuario_1.default.findByOrFail('id', data.usuario_id);
            await usuario.related('permisos').sync(data.permisos);
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
    async edit({}) { }
    async update({}) { }
    async destroy({ params, response }) {
        try {
            var usuario = await Usuario_1.default.findByOrFail('id', params.id);
            usuario.status = !usuario.status;
            usuario.save();
            return response.ok({
                mensaje: "Se actualizarón los accesos correctamente",
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
}
exports.default = UsuariosController;
//# sourceMappingURL=UsuariosController.js.map