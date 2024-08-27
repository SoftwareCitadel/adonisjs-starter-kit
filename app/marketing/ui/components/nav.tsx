import { buttonVariants } from '#common/ui/components/button'
import Logo from '#common/ui/components/logo'
import { Link } from '@inertiajs/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import NavItem from './nav_item'
import clsx from 'clsx'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="max-w-5xl p-6 lg:px-0 mx-auto flex flex-wrap items-center justify-between">
      <Link className="flex items-center space-x-4" href="/">
        <Logo className="h-8 w-8" />
        <span className="font-semibold text-lg">{import.meta.env.VITE_APP_NAME}</span>
      </Link>
      <nav className="hidden text-sm text-center gap-x-1 md:flex">
        <NavItem href="/">About</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
      </nav>
      <div className="hidden gap-x-2 md:flex">
        <Link className={buttonVariants({ variant: 'secondary' })} href="/auth/sign_up">
          Sign In
        </Link>
        <Link className={buttonVariants({ variant: 'primary' })} href="/auth/sign_up">
          Get started &rarr;
        </Link>
      </div>
      {isMobileMenuOpen ? (
        <IconX className="w-6 h-6 md:hidden cursor-pointer" onClick={toggleMobileMenu} />
      ) : (
        <IconMenu2 className="w-6 h-6 md:hidden cursor-pointer" onClick={toggleMobileMenu} />
      )}
      <div
        className={clsx(
          'flex flex-col w-full border-y mt-4 py-4 font-medium md:hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8">
          <NavItem href="/">About</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/pricing">Pricing</NavItem>
          <Link
            className={clsx(buttonVariants({ variant: 'primary' }), 'mt-2')}
            href="/auth/sign_up"
          >
            Get started
          </Link>
          <Link
            className={clsx(buttonVariants({ variant: 'secondary' }), 'mt-2')}
            href="/auth/sign_up"
          >
            Sign In
          </Link>
        </ul>
      </div>
    </nav>
  )
}
