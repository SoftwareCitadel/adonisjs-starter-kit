import React from 'react'
import AuthLayout from '../components/auth_layout'
import Button from '#common/ui/components/button'
import Input from '#common/ui/components/input'
import Label from '#common/ui/components/label'
import { useForm } from '@inertiajs/react'
import useFlashMessage from '#common/ui/hooks/use_flash_message'
import { IconCheck } from '@tabler/icons-react'

export default function ForgotPasswordPage() {
  const success = useFlashMessage('success')
  const form = useForm({
    email: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/auth/forgot_password')
  }

  return (
    <AuthLayout
      title="Forgot your password?"
      description="Type your email address to receive a reinitialization email."
    >
      {success ? (
        <div className="bg-emerald-600/10 px-4 py-2 rounded-lg border-emerald-600 border shadow-sm">
          <p className="text-emerald-600 font-semibold flex gap-x-2">
            <IconCheck className="text-emerald-600" />
            Email sent!
          </p>
          <p className="text-emerald-600 text-sm">
            We have sent you an email with instructions to reset your password
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email field */}
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              className="w-full"
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              required
              autoComplete="email"
              autoFocus
              value={form.data.email}
              onChange={(e) => form.setData('email', e.target.value)}
            />
          </div>

          <Button className="w-full" type="submit" loading={form.processing}>
            Receive an Email
          </Button>
        </form>
      )}
    </AuthLayout>
  )
}
