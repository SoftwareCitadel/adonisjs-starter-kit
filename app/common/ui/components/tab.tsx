import { Link } from '@inertiajs/react'
import * as React from 'react'
import usePath from '#common/ui/hooks/use_path'

interface TabProps {
  label: string
  href: string
}

export default function Tab({ href, label }: TabProps) {
  const path = usePath()

  return (
    <Link className="relative" href={href}>
      <div className="mx-1 my-1.5 rounded-md px-3 py-1.5 transition-all duration-75 hover:bg-neutral-100 active:bg-neutral-200">
        <p className="text-sm text-neutral-600 hover:text-black">{label}</p>
      </div>

      {path.startsWith(href) && (
        <div className="absolute bottom-0 w-full px-1.5">
          <div className="h-0.5 bg-black"></div>
        </div>
      )}
    </Link>
  )
}
