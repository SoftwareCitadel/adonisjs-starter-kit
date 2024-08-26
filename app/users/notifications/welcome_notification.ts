import env from '#start/env'
import User from '#users/database/models/user'
import { BaseMail } from '@adonisjs/mail'
import { render } from '@react-email/components'
import WelcomeEmail from '#users/emails/welcome'
import { appName } from '#config/app'

export default class WelcomeNotification extends BaseMail {
  from = env.get('EMAIL_FROM')
  subject = `Welcome to ${appName}`

  constructor(private user: User) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    this.message.to(this.user.email)

    const emailHtml = await render(WelcomeEmail({ user: this.user }))
    this.message.html(emailHtml)
  }
}
