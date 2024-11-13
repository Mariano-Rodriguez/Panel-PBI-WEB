"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class AuthController {
    async login({ request, response, auth }) {
        const email = request.input('email');
        const user = await Usuario_1.default.findBy('email', email);
        if (!user) {
            return response.badRequest({ mensaje: 'Correo Invalido o No Autorizado', permisos: null, token: null, status: false });
        }
        if (user.status == false) {
            return response.badRequest({ mensaje: 'Correo Invalido o No Autorizado', permisos: null, token: null, status: false });
        }
        const token = await auth.use('api').generate(user);
        const usuario = await Usuario_1.default.query().preload('permisos', (permisosQuery) => {
            permisosQuery.preload('vista');
        }).where('id', user.id);
        return response.ok({ mensaje: 'Inicio de Sesión Correcto', token: token.token, permisos: usuario[0].permisos, status: true });
    }
    async logout({ auth, response }) {
        try {
            await auth.use('api').revoke();
            return response.ok({
                mensaje: "Se cerro sesion correctamente",
                data: null,
                status: true
            });
        }
        catch (e) {
            return response.ok({
                mensaje: "Ocurrio un error al intentar cerrar sesion",
                data: null,
                status: false
            });
        }
    }
    async index({}) { }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map