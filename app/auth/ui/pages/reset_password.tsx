import React from 'react'
import AuthLayout from '../components/auth_layout'
import Button from '#common/ui/components/button'
import Input from '#common/ui/components/input'
import Label from '#common/ui/components/label'
import { Link, useForm } from '@inertiajs/react'
import Error from '#common/ui/components/error'

export default function ResetPasswordPage() {
  const form = useForm({
    password: '',
    confirmationPassword: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post(window.location.pathname + window.location.search)
  }

  return (
    <AuthLayout
      title="Reset your password"
      description="To reset your password, please enter a new password, and confirm it."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* New password field */}
        <div>
          <Label htmlFor="password">New Password</Label>
          <Input
            className="w-full"
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

        {/* Confirmation field */}
        <div>
          <Label htmlFor="confirmationPassword">Confirmation password</Label>
          <Input
            className="w-full"
            id="confirmationPassword"
            name="confirmationPassword"
            type="password"
            required
            autoComplete="current-password"
            placeholder="••••••••••••••••••••"
            value={form.data.confirmationPassword}
            onChange={(e) => form.setData('confirmationPassword', e.target.value)}
          />
          <Error errorKey="confirmationPassword" />
        </div>

        <Button className="w-full" type="submit" loading={form.processing}>
          Reset password
        </Button>
      </form>
    </AuthLayout>
  )
}
