import { middleware } from '#start/kernel'
import { HttpContext } from '@adonisjs/core/http'
import { Get, Middleware } from '@softwarecitadel/girouette'

/**
 * This controller is in charge of letting administrators
 * to perform CRUD operations on the blog articles.
 */
export default class BlogController {
  @Get('/admin/blog')
  @Middleware([middleware.auth(), middleware.admin()])
  async index({ inertia }: HttpContext) {
    return inertia.render('blog/index')
  }

  @Get('/admin/blog/create')
  @Middleware([middleware.auth(), middleware.admin()])
  create({ inertia }: HttpContext) {
    return inertia.render('blog/create')
  }
}
