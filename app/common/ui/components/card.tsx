import clsx from 'clsx'
import * as React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export default function Card({ title, children, className, ...props }: CardProps) {
  return (
    <div className={clsx('', className)} {...props}>
      <div className="bg-neutral-50 p-4 rounded-t-lg border border-b-0 shadow-md">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="p-4 bg-white border rounded-b-lg shadow-md">{children}</div>
    </div>
  )
}
