import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UsuarioPermiso from 'App/Models/UsuarioPermiso'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await UsuarioPermiso.createMany([
      {
        usuario_id: 1,
        permiso_id: 4
      },
      {
        usuario_id: 1,
        permiso_id: 5
      }
    ])
  }
}
