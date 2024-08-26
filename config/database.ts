import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: app.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: [
          'app/users/database/migrations',
          'app/analytics/database/migrations',
          'app/newsletter/database/migrations',
        ],
      },
      seeders: {
        paths: ['app/auth/database/seeders'],
      },
    },
  },
})

export default dbConfig
