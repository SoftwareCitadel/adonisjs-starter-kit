import React from 'react'
import clsx from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'block rounded-md border border-neutral-300 mt-1 py-1.5 text-neutral-900 shadow-sm transition placeholder:text-neutral-400 o focus:border focus:border-neutral-500 focus:ring focus:ring-neutral-200 sm:text-sm sm:leading-6',
        className
      )}
      {...props}
    />
  )
}
