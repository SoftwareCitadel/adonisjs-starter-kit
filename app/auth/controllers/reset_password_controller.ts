import { resetPasswordValidator } from '#auth/validators'
import { middleware } from '#start/kernel'
import User from '#users/database/models/user'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'

export default class ResetPasswordController {
  @Get('/auth/reset_password/:email', 'auth.reset_password.show')
  @Middleware(middleware.guest())
  async show({ request, inertia, response }: HttpContext) {
    /**
     * Verify the request signature before proceeding.
     */
    if (!request.hasValidSignature('reset_password')) {
      return response.redirect().toRoute('auth.forgot_password.show')
    }

    /**
     * Render the "Reset Password" page.
     */
    return inertia.render('auth/reset_password')
  }

  @Post('/auth/reset_password/:email', 'auth.reset_password.handle')
  @Middleware(middleware.guest())
  async handle({ request, session, params, response }: HttpContext) {
    /**
     * Verify the request signature before proceeding.
     */
    if (!request.hasValidSignature('reset_password')) {
      return response.redirect().toRoute('auth.forgot_password.show')
    }

    /**
     * Validate the request input.
     */
    const validatedData = await request.validateUsing(resetPasswordValidator)

    /**
     * Handle the password reset request.
     */
    const user = await User.findByOrFail('email', params.email)
    user.password = validatedData.password
    await user.save()

    /**
     * Redirect to the login page.
     */
    return response.redirect().toRoute('auth.sign_in.show')
  }
}
