import React from 'react'

export interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
      <path
        d="M50 5L87 30L93 75L50 95L7 75L13 30L50 5Z"
        fill="none"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  )
}
