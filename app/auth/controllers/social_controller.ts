import { afterAuthRedirectUrl } from '#config/auth'
import User from '#users/database/models/user'
import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'

export default class SocialController {
  @Get('/auth/:provider/redirect', 'social.redirect')
  redirect({ ally, params }: HttpContext) {
    return ally.use(params.provider).redirect()
  }

  @Get('/auth/:provider/callback', 'social.callback')
  async callback({ ally, params, auth, response }: HttpContext) {
    const provider = ally.use(params.provider)
    const socialUser = await provider.user()

    const payload = {
      email: socialUser.email,
      fullName: socialUser.name || socialUser.nickname,
    }

    const user = await User.firstOrCreate(payload, payload)

    await auth.use('web').login(user)

    return response.redirect(afterAuthRedirectUrl)
  }
}
