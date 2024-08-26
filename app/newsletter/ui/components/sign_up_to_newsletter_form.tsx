import Button from '#common/ui/components/button'
import * as React from 'react'

export default function SignUpToNewsletterForm() {
  return (
    <form className="space-y-4">
      <div className="flex flex-row w-full p-1 mb-4 bg-white border shadow-xs rounded-lg">
        <input
          className="flex-1 border-0 px-2 focus:ring-0 text-sm"
          placeholder="Enter your email address"
          required
          type="email"
          name="email"
          id="email"
        />
        <Button>Join the newsletter</Button>
      </div>
    </form>
  )
}
