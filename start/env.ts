/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  VITE_APP_NAME: Env.schema.string(),
  APP_URL: Env.schema.string(),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring session package
  |----------------------------------------------------------
  */
  SESSION_DRIVER: Env.schema.enum(['cookie', 'memory'] as const),

  /*
  |----------------------------------------------------------
  | Variables for configuring Stripe
  |----------------------------------------------------------
  */
  STRIPE_PUBLIC_KEY: Env.schema.string(),
  STRIPE_SECRET_KEY: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring the mail package
  |----------------------------------------------------------
  */
  EMAIL_FROM: Env.schema.string(),
  RESEND_API_KEY: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring ally package
  |----------------------------------------------------------
  */
  DISCORD_CLIENT_ID: Env.schema.string.optional(),
  DISCORD_CLIENT_SECRET: Env.schema.string.optional(),

  FACEBOOK_CLIENT_ID: Env.schema.string.optional(),
  FACEBOOK_CLIENT_SECRET: Env.schema.string.optional(),

  GITHUB_CLIENT_ID: Env.schema.string.optional(),
  GITHUB_CLIENT_SECRET: Env.schema.string.optional(),

  GOOGLE_CLIENT_ID: Env.schema.string.optional(),
  GOOGLE_CLIENT_SECRET: Env.schema.string.optional(),

  LINKEDIN_CLIENT_ID: Env.schema.string.optional(),
  LINKEDIN_CLIENT_SECRET: Env.schema.string.optional(),

  SPOTIFY_CLIENT_ID: Env.schema.string.optional(),
  SPOTIFY_CLIENT_SECRET: Env.schema.string.optional(),

  TWITTER_CLIENT_ID: Env.schema.string.optional(),
  TWITTER_CLIENT_SECRET: Env.schema.string.optional(),
})
