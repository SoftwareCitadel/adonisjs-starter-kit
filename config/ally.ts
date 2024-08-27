import env from '#start/env'
import { defineConfig, services } from '@adonisjs/ally'

const allyConfig = defineConfig({
  discord: services.discord({
    clientId: env.get('DISCORD_CLIENT_ID')!,
    clientSecret: env.get('DISCORD_CLIENT_SECRET')!,
    callbackUrl: '/auth/discord/callback',
  }),
  facebook: services.facebook({
    clientId: env.get('FACEBOOK_CLIENT_ID')!,
    clientSecret: env.get('FACEBOOK_CLIENT_SECRET')!,
    callbackUrl: '/auth/facebook/callback',
  }),
  github: services.github({
    clientId: env.get('GITHUB_CLIENT_ID')!,
    clientSecret: env.get('GITHUB_CLIENT_SECRET')!,
    callbackUrl: '/auth/github/callback',
  }),
  google: services.google({
    clientId: env.get('GOOGLE_CLIENT_ID')!,
    clientSecret: env.get('GOOGLE_CLIENT_SECRET')!,
    callbackUrl: '/auth/google/callback',
  }),
  linkedin: services.linkedin({
    clientId: env.get('LINKEDIN_CLIENT_ID')!,
    clientSecret: env.get('LINKEDIN_CLIENT_SECRET')!,
    callbackUrl: '/auth/linkedin/callback',
  }),
  spotify: services.spotify({
    clientId: env.get('SPOTIFY_CLIENT_ID')!,
    clientSecret: env.get('SPOTIFY_CLIENT_SECRET')!,
    callbackUrl: '/auth/spotify/callback',
  }),
  twitter: services.twitter({
    clientId: env.get('TWITTER_CLIENT_ID')!,
    clientSecret: env.get('TWITTER_CLIENT_SECRET')!,
    callbackUrl: '/auth/twitter/callback',
  }),
})

export default allyConfig

declare module '@adonisjs/ally/types' {
  interface SocialProviders extends InferSocialProviders<typeof allyConfig> {}
}
