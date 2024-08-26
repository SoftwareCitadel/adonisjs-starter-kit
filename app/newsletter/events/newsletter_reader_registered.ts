import NewsletterReader from '#newsletter/database/models/newsletter_reader'
import { BaseEvent } from '@adonisjs/core/events'

export default class NewsletterReaderRegistered extends BaseEvent {
  constructor(public newsletterReader: NewsletterReader) {
    super()
  }
}
