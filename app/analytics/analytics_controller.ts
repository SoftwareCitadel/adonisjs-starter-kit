import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Middleware } from '@softwarecitadel/girouette'

export default class AnalyticsController {
  @Get('/admin/analytics')
  @Middleware(middleware.admin())
  index({ inertia }: HttpContext) {
    return inertia.render('analytics/index')
  }
}
