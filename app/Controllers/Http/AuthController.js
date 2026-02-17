"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
class AuthController {
    async me({ request }) {
        const firebaseUser = request['firebaseUser'];
        console.log(firebaseUser.name);
        return { user: firebaseUser };
    }
    async logout({ auth, response }) {
        await auth.use('api').revoke();
        return response.ok({
            revoked: true
        });
    }
    async login({ request, auth, response }) {
        const firebaseUser = request['firebaseUser'];
        const user = await Usuario_1.default.findBy('email', firebaseUser.email);
        if (!user) {
            return response.forbidden({ mensaje: 'No Autorizado para Ingresar, contacta a el administrador', permisos: null, token: null, status: false });
        }
        if (user.status == false) {
            return response.forbidden({ mensaje: 'No Autorizado para Ingresar, contacta a el administrador', permisos: null, token: null, status: false });
        }
        if (!user.nombre) {
            user.nombre = firebaseUser.name;
            user.save();
        }
        const token = await auth.use('api').generate(user, { expiresIn: '120 mins' });
        return response.ok({ mensaje: 'Inicio de Sesión Correcto', data: { token: token.token }, status: true });
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map