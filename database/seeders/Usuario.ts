import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class extends BaseSeeder {
  public async run () {
    await Usuario.createMany([
      {
        email: "mariano.cabral@nartexlabs.com"
      },
      {
        email: "daniel.gonzalez@nartexlabs.com"
      },
      {
        email: "sistemas@nartexlabs.com"
      }
    ])
  }
}
