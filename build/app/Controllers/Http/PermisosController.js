"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Permiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permiso"));
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class PermisosController {
    async index({ response }) {
        try {
            const permisos = await Permiso_1.default.query().where('status', true);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: permisos,
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
    async indexAll({ response }) {
        try {
            const permisos = await Permiso_1.default.all();
            return response.json({
                mensaje: "Consulta ejecutada correctamente",
                data: permisos,
                status: true
            });
        }
        catch (e) {
            return response.json({
                mensaje: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async getPermisosUser({ response, params }) {
        try {
            const permisosUser = await Usuario_1.default.query().preload('permisos').where('id', params.id);
            return response.ok({
                mensaje: "Consulta ejecutada correctamente",
                data: permisosUser,
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
        try {
            const data = request.only(['nombre', 'vista_id']);
            await Permiso_1.default.create(data);
            return response.ok({
                mensaje: "Se inserto la informacion correctamente",
                data: null,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async show({ response, params }) {
        try {
            const permiso = await Permiso_1.default.findByOrFail('id', params.id);
            return response.ok({
                mensaje: "Se encontro la informacion correctamente",
                data: permiso,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async edit({}) { }
    async update({ params, response, request }) {
        try {
            const data = request.only(['nombre', 'vista_id']);
            const permiso = await Permiso_1.default.findByOrFail('id', params.id);
            permiso.nombre = data.nombre;
            permiso.vista_id = data.vista_id;
            permiso.save();
            return response.ok({
                mensaje: "Se modifico la informacion correctamente",
                data: null,
                status: true
            });
        }
        catch (e) {
            return response.badRequest({
                mensaje: "Ocurrio un error",
                data: null,
                status: false
            });
        }
    }
    async destroy({ params, response }) {
        try {
            var permiso = await Permiso_1.default.findByOrFail('id', params.id);
            permiso.status = !permiso.status;
            permiso.save();
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
exports.default = PermisosController;
//# sourceMappingURL=PermisosController.js.map