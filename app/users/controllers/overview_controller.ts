import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Middleware } from '@softwarecitadel/girouette'

export default class OverviewController {
  @Get('/overview')
  @Middleware(middleware.auth())
  showOverviewPage({ inertia }: HttpContext) {
    return inertia.render('users/overview')
  }
}
