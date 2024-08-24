import type { HttpContext } from '@adonisjs/core/http'
import { Post } from '@softwarecitadel/girouette'

export default class SignOutController {
  @Post('/auth/sign_out', 'auth.sign_out.handle')
  async handle({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect().toRoute('auth.sign_in.show')
  }
}
