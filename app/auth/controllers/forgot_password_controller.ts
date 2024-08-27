import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'
import User from '#users/database/models/user'
import { forgotPasswordValidator } from '#auth/validators'
import mail from '@adonisjs/mail/services/main'
import ResetPasswordNotification from '#auth/notifications/reset_password_notification'

export default class ForgotPasswordController {
  @Get('/auth/forgot_password', 'auth.forgot_password.show')
  @Middleware(middleware.guest())
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/forgot_password')
  }

  @Post('/auth/forgot_password', 'auth.forgot_password.handle')
  @Middleware(middleware.guest())
  async handle({ request, response, session }: HttpContext) {
    /**
     * Validate the email input.
     */
    const validatedData = await request.validateUsing(forgotPasswordValidator)

    /**
     * Check if the user exists, if not,
     * flash a success message to prevent user enumeration.
     */
    const user = await User.findBy('email', validatedData.email)
    if (!user) {
      session.flash('success', true)
      return response.redirect().back()
    }

    /**
     * Send an email with the signed URL.
     */
    await mail.sendLater(new ResetPasswordNotification(user))

    /**
     * Redirect back with a success message.
     */
    session.flash('success', true)
    return response.redirect().back()
  }
}
