import React from 'react'
import MarketingLayout from '../components/marketing_layout'
import { IconArticle } from '@tabler/icons-react'
import BlogPostCard from '../components/blog_post_card'
import BlogPost from '#blog/database/models/blog_post'

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <MarketingLayout>
      <div className="min-h-[calc(100vh-86px)] mx-auto max-w-3xl h-full flex flex-col items-center p-6 lg:my-12">
        <h2 className="font-semibold flex items-center gap-x-2 text-center text-2xl sm:text-3xl">
          <span>Our Latest Articles.</span>
          <IconArticle className="text-zinc-500" />
        </h2>
        <p className="pb-8 text-center text-zinc-500">
          In-depth articles on everything you need to know about
          <br /> web development with AdonisJS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t py-8 lg:py-12 lg:gap-12">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </MarketingLayout>
  )
}
