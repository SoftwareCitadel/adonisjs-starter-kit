import React from 'react'
import MarketingLayout from '../components/marketing_layout'
import { IconArticle } from '@tabler/icons-react'

export default function Blog() {
  return (
    <MarketingLayout>
      <div className="min-h-[calc(100vh-86px)] mx-auto max-w-5xl h-full flex flex-col items-center p-6">
        <h2 className="lg:mt-12 font-semibold flex items-center gap-x-2 text-center text-2xl sm:text-3xl">
          <span>Our Latest Articles.</span>
          <IconArticle className="text-zinc-500" />
        </h2>
        <p className="border-b pb-8 text-center text-zinc-500">
          In-depth articles on everything you need to know about
          <br /> web development with AdonisJS.
        </p>
      </div>
    </MarketingLayout>
  )
}
