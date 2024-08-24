import usePath from '#common/ui/hooks/use_path'
import { Link } from '@inertiajs/react'
import clsx from 'clsx'
import * as React from 'react'

export interface NavItemProps extends React.PropsWithChildren {
  href: string
}

export default function NavItem({ children, href }: NavItemProps) {
  const path = usePath()

  return (
    <Link
      className={clsx(
        'px-3 py-1.5 font-medium text-neutral-900 hover:text-neutral-600 hover:bg-neutral-100 transition rounded-xl',
        path === href && 'text-neutral-600 bg-neutral-100 shadow-sm border border-zinc-200'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
