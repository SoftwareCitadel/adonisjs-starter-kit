import React from 'react'
import useUser from '#auth/ui/hooks/use_user'
import Button from '#common/ui/components/button'
import Card from '#common/ui/components/card'
import DashboardLayout from '#common/ui/components/dashboard_layout'
import Input from '#common/ui/components/input'
import Label from '#common/ui/components/label'
import { useForm } from '@inertiajs/react'
import Error from '#common/ui/components/error'
import Dialog from '#common/ui/components/dialog'

export default function Edit() {
  const user = useUser()
  const form = useForm({
    fullName: user.fullName,
    email: user.email,
    password: '',
    passwordConfirmation: '',
  })
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = React.useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/auth/sign_up')
  }

  return (
    <DashboardLayout>
      <h2 className="text-xl sm:text-2xl font-semibold">Settings</h2>

      {/* Account settings card */}
      <Card title="Account settings">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full name field */}
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              autoFocus
              className="w-full"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Paul Valéry"
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
              className="w-full"
              id="email"
              name="email"
              type="email"
              placeholder="paul@valery.fr"
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
          <Button type="submit" loading={form.processing}>
            Update account
          </Button>
        </form>
      </Card>

      {/* Deactivate account card */}
      <Card title="Deactivate your account">
        <Button variant="danger" onClick={() => setIsDeactivateDialogOpen(true)}>
          Deactivate my account
        </Button>
      </Card>

      {/* Deactivate account dialog */}
      <Dialog
        isOpen={isDeactivateDialogOpen}
        close={() => setIsDeactivateDialogOpen(false)}
        title="Deactivate your account"
      >
        <p className="text-sm">Are you sure you want to deactivate your account?</p>
        <Button className="mt-4" variant="danger">
          Deactivate my account
        </Button>
      </Dialog>
    </DashboardLayout>
  )
}
