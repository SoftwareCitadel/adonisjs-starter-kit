import * as React from 'react'
import BlogPost from '#blog/database/models/blog_post'
import Avatar from '#common/ui/components/avatar'
import { Link } from '@inertiajs/react'

export interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      className="bg-white h-full rounded-lg shadow-md overflow-hidden flex flex-col"
      href={`/blog/${post.id}`}
    >
      {post.thumbnail ? (
        <img src={post.thumbnail} alt={post.title} className="m-1.5 w-full h-48 object-cover" />
      ) : (
        <div className="m-1.5 h-48 rounded bg-gradient-to-b from-red-400 to-orange-300"></div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          {post.tags.split(',').map((tag) => (
            <span
              key={tag}
              className="bg-neutral-50 border shadow-sm text-xs text-neutral-700 px-2 py-1 rounded-lg mr-2 inline-block mb-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-neutral-700 mb-4 text-sm flex-grow">{post.shortDescription}</p>
        <div className="flex items-center gap-x-2 mt-auto">
          {post.author && <Avatar user={post.author} />}
          <p className="font-medium text-sm">{post.author.fullName}</p>
        </div>
      </div>
    </Link>
  )
}
