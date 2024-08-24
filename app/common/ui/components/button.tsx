import { IconLoader } from '@tabler/icons-react'
import clsx from 'clsx'
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex justify-center items-center space-x-2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-neutral-900 hover:bg-neutral-800 text-white',
        secondary: 'bg-white border border-neutral-200 bg-background hover:bg-neutral-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export default function Button({
  children,
  className,
  disabled,
  loading,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ variant }), loading && 'disabled:cursor-wait', className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <IconLoader className="h-4 w-4 animate-spin" /> : null}
      <span>{children}</span>
    </button>
  )
}
