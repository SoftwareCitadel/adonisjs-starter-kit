import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'

export default class ResetPasswordController {
  @Get('/auth/reset_password', 'auth.reset_password.show')
  @Middleware(middleware.guest())
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/reset_password')
  }

  @Post('/auth/reset_password', 'auth.reset_password.handle')
  @Middleware(middleware.guest())
  async handle({}: HttpContext) {}
}
