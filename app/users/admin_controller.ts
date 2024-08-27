import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Middleware } from '@softwarecitadel/girouette'

export default class AdminController {
  @Get('/admin/users', 'admin.users.index')
  @Middleware([middleware.auth(), middleware.admin()])
  async index({ inertia }: HttpContext) {
    return inertia.render('users/admin/index')
  }
}
