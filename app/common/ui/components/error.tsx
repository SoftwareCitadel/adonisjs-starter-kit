import React from 'react'
import useError from '../hooks/use_error'

export interface ErrorProps {
  errorKey?: string
}

export default function Error({ errorKey }: ErrorProps) {
  const error = useError(errorKey)

  if (!error) {
    return null
  }

  return <p className="text-red-600 text-sm">{error}</p>
}
