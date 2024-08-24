import UserCreated from '#auth/events/user_created'
import emitter from '@adonisjs/core/services/emitter'
import logger from '@adonisjs/core/services/logger'

const AssignStripeCustomer = () => import('#billing/listeners/assign_stripe_customer')

emitter.on(UserCreated, [AssignStripeCustomer])

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
