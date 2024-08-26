import BaseModel from '#common/database/models/base_model'
import { column } from '@adonisjs/lucid/orm'

export default class Visit extends BaseModel {
  /**
   * Regular columns.
   */
  @column()
  declare link: string

  @column()
  declare country: string

  @column()
  declare browser: string

  @column()
  declare os: string

  @column()
  declare device: string

  @column()
  declare referrer: string
}
