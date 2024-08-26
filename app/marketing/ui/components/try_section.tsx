import * as React from 'react'
import Button from '#common/ui/components/button'
import { Link } from '@inertiajs/react'
import Logo from '#common/ui/components/logo'

export default function TrySection() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-8 pt-20 pb-24">
        <div className="flex flex-col items-center justify-center">
          <Logo className="h-16 w-auto" />
          <h2 className="text-4xl font-bold text-center mt-4">
            Try {import.meta.env.VITE_APP_NAME}
            <br /> today.
          </h2>
          <p className="text-center text-zinc-500 mt-4 text-lg">Get started for free.</p>
          <Link href="/auth/sign_up">
            <Button className="mt-4">Get started &rarr;</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
