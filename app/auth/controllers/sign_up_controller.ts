import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'

export default class SignUpController {
  @Get('/auth/sign_up', 'auth.sign_up.show')
  @Middleware(middleware.guest())
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_up')
  }

  @Post('/auth/sign_up', 'auth.sign_up.handle')
  @Middleware(middleware.guest())
  async handle({}: HttpContext) {}
}
