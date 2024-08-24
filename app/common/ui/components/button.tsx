import { IconLoader } from '@tabler/icons-react'
import clsx from 'clsx'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export default function Button({ children, className, disabled, loading, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex justify-center items-center space-x-2 rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 disabled:cursor-not-allowed disabled:opacity-60',
        loading && 'disabled:cursor-wait',
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <IconLoader className="h-4 w-4 animate-spin" /> : null}
      <span>{children}</span>
    </button>
  )
}
