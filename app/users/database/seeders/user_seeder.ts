import User from '#users/database/models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        seeded: true,
        fullName: 'Paul Valéry',
        role: 'customer',
        email: 'paul@valery.fr',
        password: 'La Jeune Parque',
      },
      {
        seeded: true,
        fullName: 'Admin User',
        role: 'admin',
        email: 'user@admin.com',
        password: 'adminadmin',
      },
    ])
  }
}
