import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { afterCreate, column } from '@adonisjs/lucid/orm'
import BaseModel from '#common/database/models/base_model'
import UserCreated from '#users/events/user_created'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  /**
   * Regular columns.
   */
  @column()
  declare fullName: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: 'customer' | 'admin'

  @column()
  declare stripeCustomerId: string | null

  /**
   * Hooks.
   */
  @afterCreate()
  static async createStripeCustomer(user: User) {
    if (user.seeded) return
    await UserCreated.dispatch(user)
  }
}
