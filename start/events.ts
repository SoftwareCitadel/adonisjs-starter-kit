import PageVisited from '#analytics/events/page_visited'
import UserCreated from '#users/events/user_created'
import emitter from '@adonisjs/core/services/emitter'
import logger from '@adonisjs/core/services/logger'

/**
 * User-related events.
 */
emitter.listen(UserCreated, [
  () => import('#billing/listeners/assign_stripe_customer'),
  () => import('#users/listeners/send_welcome_email'),
])

/**
 * Analytics-related events.
 */
emitter.on(PageVisited, [() => import('#analytics/listeners/gather_visit_information')])

/**
 * Log SQL queries, when debug mode is enabled.
 */
emitter.on('db:query', (event) => {
  logger.debug(event.sql)
})

/**
 * Log errors.
 */
emitter.onError((event, error, data) => {
  logger.error({ event, error, data }, 'Failed to handle event')
})
