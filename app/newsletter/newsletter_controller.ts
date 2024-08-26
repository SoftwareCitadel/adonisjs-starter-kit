import { HttpContext } from '@adonisjs/core/http'
import { Post } from '@softwarecitadel/girouette'
import { registerToNewsletterValidator } from './validator.js'
import NewsletterReader from './database/models/newsletter_reader.js'

export default class NewsletterController {
  @Post('/newsletter/register')
  async register({ request, response, session }: HttpContext) {
    const { email } = await request.validateUsing(registerToNewsletterValidator)

    await NewsletterReader.firstOrCreate({ email }, { email })

    session.flash('newsletter.registered', true)

    return response.redirect().back()
  }
}
