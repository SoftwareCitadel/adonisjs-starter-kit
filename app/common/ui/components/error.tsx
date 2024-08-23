import React from 'react'
import useError from '../hooks/use_error'

export interface ErrorProps {
  key: string
}

export default function Error({ key }: ErrorProps) {
  const error = useError(key)

  if (!error) {
    return null
  }

  return <p className="text-red-600 text-sm">{error}</p>
}
