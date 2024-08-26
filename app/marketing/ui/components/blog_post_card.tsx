import * as React from 'react'
import BlogPost from '#blog/database/models/blog_post'
import Avatar from '#common/ui/components/avatar'
import { Link } from '@inertiajs/react'

export interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {post.thumbnail ? (
          <img src={post.thumbnail} alt={post.title} className="m-1.5 w-full h-48 object-cover" />
        ) : (
          <div className="m-1.5 h-48 rounded bg-gradient-to-b from-[#f6d365] to-[#fda085]"></div>
        )}
        <div className="p-4">
          <p className="text-sm text-neutral-600 mb-2">
            {post.tags.split(',').map((tag) => (
              <span
                key={tag}
                className="bg-neutral-100 border shadow-sm text-xs text-neutral-700 px-2 py-1 rounded-lg mr-2"
              >
                {tag}
              </span>
            ))}
          </p>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-neutral-700 mb-4 text-sm">{post.shortDescription}</p>
          <div className="flex items-center gap-x-2">
            {post.author && <Avatar user={post.author} />}
            <p className="font-medium text-sm">{post.author.fullName}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
