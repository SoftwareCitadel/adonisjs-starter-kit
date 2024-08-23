import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'

export default class MarketingController {
  @Get('/', 'marketing.landing')
  landing({ inertia }: HttpContext) {
    return inertia.render('marketing/landing')
  }
}
