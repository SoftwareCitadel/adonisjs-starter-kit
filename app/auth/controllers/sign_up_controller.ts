import User from '#auth/database/models/user'
import { signUpValidator } from '#auth/validators'
import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Post, Middleware } from '@softwarecitadel/girouette'
import { afterAuthRedirectUrl } from '#config/auth'

export default class SignUpController {
  @Get('/auth/sign_up', 'auth.sign_up.show')
  @Middleware(middleware.guest())
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_up')
  }

  @Post('/auth/sign_up', 'auth.sign_up.handle')
  @Middleware(middleware.guest())
  async handle({ auth, request, response, session }: HttpContext) {
    const payload = await request.validateUsing(signUpValidator)

    const userAlreadyExists = await User.findBy('email', payload.email)
    if (userAlreadyExists !== null) {
      session.flash('errors.email', 'Email already exists')
      return response.redirect().back()
    }

    const user = await User.create(payload)
    await user.save()

    await auth.use('web').login(user)

    return response.redirect(afterAuthRedirectUrl)
  }
}
