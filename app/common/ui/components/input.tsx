import React from 'react'
import clsx from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'block w-full rounded-md border border-zinc-300 mt-1 py-1.5 text-zinc-900 shadow-sm transition placeholder:text-zinc-400 o focus:border focus:border-zinc-500 focus:ring focus:ring-zinc-200 sm:text-sm sm:leading-6',
        className
      )}
      {...props}
    />
  )
}
