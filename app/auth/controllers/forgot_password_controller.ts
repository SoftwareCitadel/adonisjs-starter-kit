import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'

export default class ForgotPasswordController {
  @Get('/auth/forgot_password', 'auth.forgot_password.show')
  @Middleware(middleware.guest())
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/forgot_password')
  }

  @Post('/auth/forgot_password', 'auth.forgot_password.handle')
  @Middleware(middleware.guest())
  async handle({}: HttpContext) {}
}
