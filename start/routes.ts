/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

/*Route.get('/', async ({ view }) => {
  return view.render('welcome')
})*/

Route.group(() => {
  Route.resource('usuariosB', 'UsuariosController').apiOnly()
  Route.resource('permisos', 'PermisosController').apiOnly()
  Route.resource('vistas', 'VistasController').apiOnly()
  Route.post('allPermisos', 'PermisosController.indexAll')
  Route.post('asignarPermisos', 'UsuariosController.asignarPermisos')
  Route.get('getPermisosUsuario/:id', 'PermisosController.getPermisosUser')
  Route.post('usuariosBPermisos', 'UsuariosController.usuariosPermisos')
  Route.resource('interaccionesA', 'InteraccionesController').apiOnly()
  Route.get('interaccionesUsuarios', 'InteraccionesController.InteXUsuario')
  Route.resource('panelesCategoriasPbi', 'PanelesCategoriasPbisController').apiOnly()
  Route.resource('panelesPbi', 'PanelesPbisController').apiOnly()
  Route.resource('panelesUsuarioPbi', 'PanelesUsuariosPbisController').apiOnly()
  Route.post('obtenerPanel', 'PanelesUsuariosPbisController.obtenerPaneles')
  Route.post('getPanelesxCategoria', 'PanelesCategoriasPbisController.getPanelesxCategoria')
  Route.post('getPanelesxUsuariosxCategoria', 'PanelesUsuariosPbisController.getPanelesxUsuariosxCategoria')

  Route.resource('avisos', 'AvisosController').apiOnly()
  Route.get('Allavisos', 'AvisosController.indexAll')
  Route.get('cambiarStatusAviso/:id', 'AvisosController.changeStatus')
  Route.post('searchPorFechas', 'InteraccionesController.searchPorFechas')
}).prefix("api/v1").middleware(['auth'])

Route.group(() => {
  Route.post('login', 'AuthController.login')
}).prefix("auth/v1")

Route.group(() => {
  Route.get('logoutB', 'AuthController.logout')
}).prefix("auth/v1")

Route.get('*', async ({ response }) => {
  return response.download('public/index.html')
})
