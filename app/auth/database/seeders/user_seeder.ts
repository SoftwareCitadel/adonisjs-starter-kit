import User from '#auth/database/models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      fullName: 'Paul Valéry',
      email: 'paul@valery.fr',
      password: 'La Jeune Parque',
    })
  }
}
