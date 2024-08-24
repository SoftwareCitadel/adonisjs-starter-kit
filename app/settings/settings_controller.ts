import User from '#auth/database/models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { settingsValidator } from './validator.js'
import { Delete, Get, Middleware, Patch } from '@softwarecitadel/girouette'
import { middleware } from '#start/kernel'

export default class SettingsController {
  @Get('/settings', 'settings.edit')
  @Middleware(middleware.auth())
  async edit({ inertia }: HttpContext) {
    return inertia.render('settings/edit')
  }

  @Patch('/settings', 'settings.update')
  @Middleware(middleware.auth())
  async update({ auth, request, response, session }: HttpContext) {
    /**
     * Validate the input payload.
     */
    const { email, newPassword } = await request.validateUsing(settingsValidator)

    const user = auth.user as User

    /**
     * In the case the user updates email address,
     * check the email address is free.
     */
    if (user.email !== email) {
      const emailExists = await User.query().where('email', email)

      if (emailExists) {
        session.flash('errors.email', 'Email already exists')
        return response.redirect().back()
      }
    }

    /**
     * Update user's properties.
     */
    user.email = email
    if (newPassword) {
      user.password = newPassword
    }
    await user.save()

    return response.redirect().back()
  }

  @Delete('/settings', 'settings.destroy')
  @Middleware(middleware.auth())
  async destroy({ auth, response }: HttpContext) {
    /**
     * Delete the user from the database.
     */
    await auth.user!.delete()

    return response.redirect().toPath('auth.sign_up.show')
  }
}
