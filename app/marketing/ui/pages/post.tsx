import React from 'react'
import MarketingLayout from '../components/marketing_layout'
import { IconArticle } from '@tabler/icons-react'
import BlogPost from '#blog/database/models/blog_post'
import Avatar from '#common/ui/components/avatar'
import JoinNewsletterSection from '../components/join_newsletter_section'
import { Head } from '@inertiajs/react'
import Markdown from 'markdown-to-jsx'
import Code from '../components/code'

export default function Post({ post }: { post: BlogPost }) {
  return (
    <MarketingLayout>
      <Head title={post.title}>
        <meta name="description" content={post.shortDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.shortDescription} />
        <meta property="og:image" content={`/blog/${post.id}/og`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.shortDescription} />
        <meta name="twitter:image" content={`/blog/${post.id}/og`} />
      </Head>

      <div className="min-h-[calc(100vh-86px)] mx-auto max-w-2xl h-full flex flex-col items-center p-6 lg:mt-12">
        <header className="text-center gap-y-2 pb-8 border-b w-full flex flex-col items-center">
          <p className="text-neutral-500 text-xs">{post.publishedAtFormatted}</p>
          <h2 className="font-semibold flex items-center gap-x-2 text-center text-2xl sm:text-3xl">
            <span>{post.title}</span>
            <IconArticle className="text-neutral-500" />
          </h2>
          {post.thumbnail ? (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="m-1.5 w-full min-h-48 sm:min-h-64 lg:min-h-96 object-cover"
            />
          ) : (
            <div className="m-1.5 min-h-48 sm:min-h-64 lg:min-h-96 w-full rounded bg-gradient-to-b from-red-400 to-orange-300"></div>
          )}
          <div className="flex justify-center items-center gap-x-2 mt-auto pt-2">
            {post.author && <Avatar user={post.author} />}
            <p className="text-sm">
              Written by <span className="font-medium">{post.author.fullName}</span>
            </p>
          </div>
        </header>

        <main className="prose prose-neutral my-12">
          <Markdown
            options={{
              overrides: { code: { component: Code } },
            }}
          >
            {post.content}
          </Markdown>
        </main>

        <JoinNewsletterSection />
      </div>
    </MarketingLayout>
  )
}
