import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Middleware } from '@softwarecitadel/girouette'

export default class BillingController {
  @Get('/billing')
  @Middleware(middleware.auth())
  show({ inertia }: HttpContext) {
    return inertia.render('billing/index')
  }
}
