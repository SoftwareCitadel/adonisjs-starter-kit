import React from 'react'
import AuthLayout from '#auth/ui/components/auth_layout'
import Label from '#common/ui/components/label'
import Input from '#common/ui/components/input'
import Link from '#common/ui/components/link'
import Error from '#common/ui/components/error'
import Button from '#common/ui/components/button'

export default function SignUp() {
  return (
    <AuthLayout
      title="Create your account."
      description="Welcome! Please fill in the details to get started."
    >
      <form className="space-y-4">
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
          <Error key="email" />
        </div>

        {/* Password field */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="••••••••••••••••••••"
          />
          <Error key="password" />
        </div>

        <Error key="auth" />

        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-500">
        Already a member? <Link href="/auth/sign_in">Sign in</Link>
      </p>
    </AuthLayout>
  )
}
