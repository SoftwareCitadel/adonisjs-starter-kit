import React from 'react'
import AuthLayout from '#auth/ui/components/auth_layout'
import Label from '#common/ui/components/label'
import Input from '#common/ui/components/input'
import Link from '#common/ui/components/link'
import Error from '#common/ui/components/error'
import Button from '#common/ui/components/button'
import { useForm } from '@inertiajs/react'

export default function SignUp() {
  const form = useForm({
    fullName: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/auth/sign_up')
  }

  return (
    <AuthLayout
      title="Create your account."
      description="Welcome! Please fill in the details to get started."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full name field */}
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            required
            autoComplete="fullName"
            value={form.data.fullName}
            onChange={(e) => form.setData('fullName', e.target.value)}
          />
          <Error errorKey="fullName" />
        </div>

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
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
          />
          <Error errorKey="email" />
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
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
          />
          <Error errorKey="password" />
        </div>

        <Error errorKey="auth" />

        <Button className="w-full" type="submit" loading={form.processing}>
          Sign Up
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-500">
        Already a member? <Link href="/auth/sign_in">Sign in</Link>
      </p>
    </AuthLayout>
  )
}
