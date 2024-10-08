import { DateTime } from 'luxon'
import { belongsTo, column, computed } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#users/database/models/user'
import BaseModel from '#common/database/models/base_model'

export default class BlogPost extends BaseModel {
  /**
   * Regular columns.
   */
  @column()
  declare title: string

  @column()
  declare shortDescription: string

  @column()
  declare content: string

  @column()
  declare thumbnail?: string

  @column()
  declare tags: string

  @column.dateTime()
  declare publishedAt: DateTime | null

  @computed()
  get publishedAtFormatted() {
    return this.publishedAt?.toLocaleString(DateTime.DATE_FULL) ?? 'Unpublished'
  }

  /**
   * Relationships.
   */
  @belongsTo(() => User, { foreignKey: 'authorId' })
  declare author: BelongsTo<typeof User>

  @column()
  declare authorId?: string

  /**
   * React component.
   */
  declare render: (props: { post: BlogPost }) => JSX.Element
}
