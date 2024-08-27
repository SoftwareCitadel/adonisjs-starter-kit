import React from 'react'
import MarketingLayout from '../components/marketing_layout'
import { IconArticle, IconMail, IconPaperclip } from '@tabler/icons-react'
import BlogPostCard from '../components/blog_post_card'
import BlogPost from '#blog/database/models/blog_post'
import SignUpToNewsletterForm from '#newsletter/ui/components/sign_up_to_newsletter_form'

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <MarketingLayout>
      <div className="min-h-[calc(100vh-86px)] mx-auto max-w-3xl h-full flex flex-col items-center p-6 lg:my-12">
        <h2 className="font-semibold flex items-center gap-x-2 text-center text-2xl sm:text-3xl">
          <span>Our Latest Articles.</span>
          <IconArticle className="text-neutral-500" />
        </h2>
        <p className="pb-8 text-center text-neutral-500">
          In-depth articles on everything you need to know about
          <br /> web development with AdonisJS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y py-8 lg:py-12 lg:gap-12">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="pt-8">
          <h2 className="flex justify-center items-center font-semibold text-center text-2xl sm:text-3xl">
            <span>Join our newsletter.</span>
            <IconMail className="ml-2 text-neutral-500" />
          </h2>
          <p className="pb-8 text-center text-neutral-500">
            Get the latest updates on new articles, tutorials, and more.
          </p>
          <SignUpToNewsletterForm />
          <p className="text-sm text-center text-neutral-500">
            No spam. No trackers. No ads. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </MarketingLayout>
  )
}
