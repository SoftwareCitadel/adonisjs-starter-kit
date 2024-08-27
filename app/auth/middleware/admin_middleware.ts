import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Admin middleware is used to ensure that the current user
 * has the role "admin".
 */
export default class AdminMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    if (!auth.user) {
      return response.unauthorized('You must be logged in to access this page')
    }

    if (auth.user.role !== 'admin') {
      return response.unauthorized('You must be an admin to access this page')
    }

    return next()
  }
}
