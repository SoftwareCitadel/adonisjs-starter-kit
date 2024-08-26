import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'

export default class LegalController {
  @Get('/legal/terms_of_service')
  showTermsOfServicePage({ inertia }: HttpContext) {
    return inertia.render('legal/terms_of_service')
  }

  @Get('/legal/privacy_policy')
  showPrivacyPolicyPage({ inertia }: HttpContext) {
    return inertia.render('legal/privacy_policy')
  }

  @Get('/legal/subprocessors')
  showSubprocessorsPage({ inertia }: HttpContext) {
    return inertia.render('legal/subprocessors')
  }
}
