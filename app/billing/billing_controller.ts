import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'

export default class BillingController {
  @Get('/billing')
  show({ inertia }: HttpContext) {
    return inertia.render('billing/index')
  }
}
