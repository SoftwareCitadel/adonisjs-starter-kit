import React from 'react'
import clsx from 'clsx'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={clsx('block text-sm font-medium leading-6 text-zinc-900', className)}
      {...props}
    />
  )
}
