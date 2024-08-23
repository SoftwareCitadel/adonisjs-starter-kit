import React from 'react'
import AuthLayout from '../components/auth_layout'
import Button from '#common/ui/components/button'
import Input from '#common/ui/components/input'
import Label from '#common/ui/components/label'

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot your password?"
      description="Type your email address to receive a reinitialization email."
    >
      <form action="#" method="POST" className="space-y-4">
        {/* Email field */}
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            required
            autoComplete="email"
          />
        </div>

        <Button className="w-full" type="submit">
          Receive an Email
        </Button>
      </form>
    </AuthLayout>
  )
}
