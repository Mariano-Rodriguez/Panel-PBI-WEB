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
      },
      {
        email: "rodolfo.mondragon@nartexlabs.com"
      },
      {
        email: "humberto.hernandez@nartexlabs.com"
      },
      {
        email: "daniela.muzza@nartexlabs.com"
      },
      {
        email: "lilian.coronel@nartexlabs.com"
      },
      {
        email: "edwin.palacios@nartexlabs.com"
      },
      {
        email: "hsalas@nartexlabs.com"
      },
      {
        email: "tania.hernandez@nartexlabs.com"
      },
      {
        email: "victoria.gonzalez@nartexlabs.com"
      }
    ])
  }
}
