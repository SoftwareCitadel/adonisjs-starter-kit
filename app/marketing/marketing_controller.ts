import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'

export default class MarketingController {
  @Get('/', 'marketing.landing')
  showLandingPage({ inertia }: HttpContext) {
    return inertia.render('marketing/landing')
  }

  @Get('/pricing', 'marketing.pricing')
  showPricingPage({ inertia }: HttpContext) {
    return inertia.render('marketing/pricing')
  }

  @Get('/blog', 'marketing.blog')
  showBlogPage({ inertia }: HttpContext) {
    return inertia.render('marketing/blog')
  }

  @Get('/blog/:articleId', 'marketing.article')
  showArticlePage({ inertia }: HttpContext) {
    return inertia.render('marketing/article')
  }
}
