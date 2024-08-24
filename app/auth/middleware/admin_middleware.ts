import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Admin middleware is used to ensure that the current user
 * has the role "admin".
 */
export default class AdminMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    if (!auth.user) {
      return response.unauthorized()
    }

    if (auth.user.role !== 'admin') {
      return response.unauthorized()
    }

    return next()
  }
}
