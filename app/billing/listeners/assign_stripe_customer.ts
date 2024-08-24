import User from '#auth/database/models/user'
import env from '#start/env'
import { inject } from '@adonisjs/core'
import Stripe from 'stripe'

export default class AssignStripeCustomer {
  @inject()
  async handle({ user }: { user: User }) {
    /**
     * Create a new Stripe instance.
     */
    const stripe = new Stripe(env.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2024-06-20',
    })

    /**
     * Create some new customer resource in Stripe.
     */
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.fullName,
    })

    /**
     * Save the id from the Stripe customer resource in the database.
     */
    user.stripeCustomerId = customer.id

    await user.save()
  }
}