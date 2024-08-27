import env from '#start/env'
import User from '#users/database/models/user'
import { BaseMail } from '@adonisjs/mail'
import { render } from '@react-email/components'
import { appName } from '#config/app'
import router from '@adonisjs/core/services/router'
import ResetPasswordEmail from '#auth/emails/reset_password_email'

export default class ResetPasswordNotification extends BaseMail {
  from = env.get('EMAIL_FROM')
  subject = `Reset your password for ${appName}`

  constructor(private user: User) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    /**
     * Generate a signed URL with the user's email,
     * which can be used to reset the password.
     */
    const signedUrl = router.makeSignedUrl(
      'auth.reset_password.show',
      { email: this.user.email },
      { expiresIn: '30m', prefixUrl: env.get('APP_URL'), purpose: 'reset_password' }
    )

    this.message.to(this.user.email)

    const emailHtml = await render(ResetPasswordEmail({ user: this.user, signedUrl }))
    this.message.html(emailHtml)
  }
}
