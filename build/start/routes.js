"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.resource('usuariosB', 'UsuariosController').apiOnly();
    Route_1.default.resource('permisos', 'PermisosController').apiOnly();
    Route_1.default.resource('vistas', 'VistasController').apiOnly();
    Route_1.default.post('allPermisos', 'PermisosController.indexAll');
    Route_1.default.post('asignarPermisos', 'UsuariosController.asignarPermisos');
    Route_1.default.get('getPermisosUsuario/:id', 'PermisosController.getPermisosUser');
    Route_1.default.post('usuariosBPermisos', 'UsuariosController.usuariosPermisos');
    Route_1.default.resource('interaccionesA', 'InteraccionesController').apiOnly();
    Route_1.default.get('interaccionesUsuarios', 'InteraccionesController.InteXUsuario');
    Route_1.default.resource('panelesCategoriasPbi', 'PanelesCategoriasPbisController').apiOnly();
    Route_1.default.resource('panelesPbi', 'PanelesPbisController').apiOnly();
    Route_1.default.resource('panelesUsuarioPbi', 'PanelesUsuariosPbisController').apiOnly();
    Route_1.default.post('obtenerPanel', 'PanelesUsuariosPbisController.obtenerPaneles');
}).prefix("api/v1").middleware(['auth']);
Route_1.default.group(() => {
    Route_1.default.post('login', 'AuthController.login');
}).prefix("auth/v1");
Route_1.default.group(() => {
    Route_1.default.get('logoutB', 'AuthController.logout');
}).prefix("auth/v1");
Route_1.default.get('*', async ({ response }) => {
    return response.download('public/index.html');
});
//# sourceMappingURL=routes.js.map