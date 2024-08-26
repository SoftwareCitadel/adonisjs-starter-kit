import BaseModel from '#common/database/models/base_model'
import NewsletterReaderRegistered from '#newsletter/events/newsletter_reader_registered'
import { afterCreate, column } from '@adonisjs/lucid/orm'

export default class NewsletterReader extends BaseModel {
  /**
   * Regular columns.
   */
  @column()
  declare email: string

  @column()
  declare isEmailVerified: boolean

  /**
   * Hooks.
   */
  @afterCreate()
  static async createStripeCustomer(newsletterReader: NewsletterReader) {
    await NewsletterReaderRegistered.dispatch(newsletterReader)
  }
}
