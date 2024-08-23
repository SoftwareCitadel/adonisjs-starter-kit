import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'

export default class SignInController {
  @Get('/auth/sign_in', 'auth.sign_in.show')
  @Middleware(middleware.guest())
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_in')
  }

  @Post('/auth/sign_in', 'auth.sign_in.handle')
  @Middleware(middleware.guest())
  async handle({}: HttpContext) {}
}
