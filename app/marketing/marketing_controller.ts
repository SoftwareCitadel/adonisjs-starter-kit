import BlogPost from '#blog/database/models/blog_post'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'
import OGService from './og_service.js'

export default class MarketingController {
  @Get('/', 'marketing.landing')
  showLandingPage({ inertia }: HttpContext) {
    return inertia.render('marketing/landing')
  }

  @Get('/blog', 'marketing.blog')
  async showBlogPage({ inertia }: HttpContext) {
    const posts = await BlogPost.query().preload('author').orderBy('publishedAt', 'desc')
    return inertia.render('marketing/blog', { posts })
  }

  @Get('/blog/:postId', 'marketing.post')
  async showBlogPostPage({ params, inertia }: HttpContext) {
    const post = await BlogPost.query().where('id', params.postId).preload('author').firstOrFail()
    return inertia.render('marketing/post', { post })
  }

  @Get('/blog/:postId/og', 'marketing.post.og')
  @inject()
  async renderOpenGraphImageForBlogPost({ params, response }: HttpContext, ogService: OGService) {
    const post = await BlogPost.query().where('id', params.postId).firstOrFail()
    const image = await ogService.generateImage(post.title)
    return response.header('Content-Type', 'image/png').send(image)
  }
}
