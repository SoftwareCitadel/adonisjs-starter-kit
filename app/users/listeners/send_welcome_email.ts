import { inject } from '@adonisjs/core'
import WelcomeNotification from '#users/notifications/welcome_notification'
import mail from '@adonisjs/mail/services/main'
import UserCreated from '#users/events/user_created'

export default class SendWelcomeEmail {
  @inject()
  async handle({ user }: UserCreated) {
    await mail.send(new WelcomeNotification(user))
  }
}
