import React from 'react'
import { Link as InertiaLink, InertiaLinkProps } from '@inertiajs/react'
import clsx from 'clsx'

export interface LinkProps extends InertiaLinkProps {}

export default function Link({ className, ...props }: LinkProps) {
  return (
    <InertiaLink
      className={clsx('text-sm font-semibold text-blue-600 hover:text-blue-500', className)}
      {...props}
    />
  )
}
