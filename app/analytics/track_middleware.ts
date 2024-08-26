import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import PageVisited from './events/page_visited.js'

export default class TrackMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Only track GET requests.
     */
    if (ctx.request.method() !== 'GET') {
      return await next()
    }

    /**
     * Do not track bots.
     */
    const userAgent = ctx.request.header('user-agent') || ''
    if (userAgent.includes('bot')) {
      return await next()
    }

    /**
     * Emit page visited event.
     */
    await PageVisited.dispatch(ctx)

    // Call next method in the pipeline
    const output = await next()

    return output
  }
}
