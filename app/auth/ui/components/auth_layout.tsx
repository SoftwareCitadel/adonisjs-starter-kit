import * as React from 'react'
import Logo from '#common/ui/components/logo'
import { Link } from '@inertiajs/react'

export interface AuthLayoutProps extends React.PropsWithChildren {
  title: string
  description: string
}

export default function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center">
      <div className="space-y-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm px-6 py-12 lg:px-8">
        <header>
          <div className="h-12 w-12 mx-auto hover:opacity-50 transition-opacity">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            {title}
          </h2>
          <h3 className="text-sm text-center font-medium text-zinc-500">{description}</h3>
        </header>

        <hr />

        <main>{children}</main>
      </div>
    </div>
  )
}
