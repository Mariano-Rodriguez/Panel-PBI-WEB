"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.resource('roles', 'RolesController').apiOnly();
    Route_1.default.resource('categorias', 'CategoriasController').apiOnly();
    Route_1.default.resource('vistas', 'VistasController').apiOnly();
    Route_1.default.resource('usuarios', 'UsuariosController').apiOnly();
    Route_1.default.resource('vistas_usuarios', 'VistaUsuariosController').apiOnly();
    Route_1.default.get('usuarios_activos', 'UsuariosController.solo_activos');
    Route_1.default.get('info_usuario', 'UsuariosController.info_usuario');
    Route_1.default.get('vistas_por_usuario_loggeado', 'UsuariosController.obtener_vistas_por_usuario_loggueado');
    Route_1.default.get('cat_por_loggeado', 'CategoriasController.cat_por_loggeado').middleware(['auth:api']);
    Route_1.default.get('vistasActivas/:id', 'VistasController.vistasActivas');
    Route_1.default.get('vistasUsuarios/:id', 'VistaUsuariosController.vistaUsuarios');
    Route_1.default.post('asignarVistas', 'VistaUsuariosController.asignarVistas');
    Route_1.default.get('categorias_pbi_activos', 'CategoriasPbisController.solo_activos');
    Route_1.default.get('paneles_pbi_activos', 'PanelesPbisController.solo_activos');
    Route_1.default.post('paneles_pbi_categorias', 'PanelesPbisController.solo_activos_categorias');
    Route_1.default.resource('categorias_pbi', 'CategoriasPbisController').apiOnly();
    Route_1.default.resource('paneles_pbi', 'PanelesPbisController').apiOnly();
    Route_1.default.resource('panelesUsuarioPbi', 'PanelUsuarioPbisController').apiOnly();
    Route_1.default.post('obtenerPanel', 'PanelUsuarioPbisController.obtenerPaneles');
    Route_1.default.post('getPanelesxCategoria', 'PanelUsuarioPbisController.getPanelesxCategoria');
    Route_1.default.post('getPanelesxUsuariosxCategoria', 'PanelUsuarioPbisController.getPanelesxUsuariosxCategoria');
}).prefix('api/v1').middleware(['auth:api']);
Route_1.default.group(() => {
    Route_1.default.get('login', 'AuthController.login').middleware('firebaseAuth');
    Route_1.default.get('logout', 'AuthController.logout').middleware(['auth:api']);
}).prefix('auth/v1');
Route_1.default.get('*', async ({ response }) => {
    return response.download('public/index.html');
});
//# sourceMappingURL=routes.js.map