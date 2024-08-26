import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'blog_posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('title').notNullable()
      table.string('short_description').notNullable()
      table.text('content').notNullable()
      table.string('thumbnail').nullable()
      table.string('tags').notNullable().defaultTo('')

      table.string('author_id').nullable().references('id').inTable('users').onDelete('SET NULL')

      table.timestamp('published_at', { useTz: true }).nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
