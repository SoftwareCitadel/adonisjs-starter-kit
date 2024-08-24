import React from 'react'
import MarketingLayout from '../components/marketing_layout'
import { Link } from '@inertiajs/react'
import { buttonVariants } from '#common/ui/components/button'
import { IconBrandGithub } from '@tabler/icons-react'
import usePageProps from '#common/ui/hooks/use_page_props'
import illustration from '../assets/illustration.png'

export default function LandingPage() {
  const { appName } = usePageProps<{ appName: string }>()
  return (
    <MarketingLayout>
      <div className="min-h-[calc(100vh-86px)] mx-auto max-w-5xl h-full flex justify-center items-center sm:space-x-8 lg:space-x-16 p-6 sm:px-0">
        <div className="space-y-6 -mt-12">
          <h1 className="text-7xl font-semibold">Meet {appName}.</h1>
          <h2 className="text-xl text-black">
            {appName} is a <strong>starter kit</strong> made for <em>developers</em> who want to put
            their next SaaS idea on the market rapidly.
          </h2>
          <div className="flex space-x-4">
            <Link href="/auth/sign_up" className={buttonVariants({ variant: 'primary' })}>
              <span>Get started</span> <span>&rarr;</span>
            </Link>
            <a
              className={buttonVariants({ variant: 'secondary' })}
              href="https://github.com/softwarecitadel/adonisjs-starter-kit"
            >
              <IconBrandGithub className="w-4 h-4" />
              <span>Read The Code</span>
            </a>
          </div>
        </div>
        <div className="justify-end w-full hidden sm:flex">
          <img src={illustration} className="md:w-full max-w-4xl" />
        </div>
      </div>
    </MarketingLayout>
  )
}
