/**
 * This file is in charge of registering marketing-related routes.
 */

import router from '@adonisjs/core/services/router'

/**
 * This route maps the landing page.
 */
router.get('/', ({ inertia }) => inertia.render('marketing/landing'))
