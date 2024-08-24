import User from '#auth/database/models/user'
import { signInValidator } from '#auth/validators'
import { afterAuthRedirectUrl } from '#config/auth'
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
  async handle({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(signInValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().toPath(afterAuthRedirectUrl)
  }
}
