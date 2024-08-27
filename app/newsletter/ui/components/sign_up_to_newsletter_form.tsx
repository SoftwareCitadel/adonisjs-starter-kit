import Button from '#common/ui/components/button'
import useFlashMessage from '#common/ui/hooks/use_flash_message'
import { useForm } from '@inertiajs/react'
import { IconCheck } from '@tabler/icons-react'
import * as React from 'react'

export default function SignUpToNewsletterForm() {
  const form = useForm({
    email: '',
  })
  const success = useFlashMessage('registered_to_newsletter')

  console.log('registered_to_newsletter', success)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.post('/newsletter/register', {
      preserveScroll: true,
      onSuccess: () => {
        form.setData('email', '')
      },
    })
  }

  if (success) {
    return (
      <div className="bg-emerald-600/10 px-4 py-2 rounded-lg border-emerald-600 border shadow-sm">
        <p className="text-emerald-600 font-semibold flex gap-x-2">
          <IconCheck className="text-emerald-600" />
          Registered!
        </p>
        <p className="text-emerald-600 text-sm">Check your email to confirm your subscription.</p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-row w-full p-1 mb-4 bg-white border shadow-xs rounded-lg">
        <input
          className="flex-1 border-0 px-2 focus:ring-0 text-sm focus:"
          placeholder="Enter your email address"
          required
          type="email"
          name="email"
          id="email"
          value={form.data.email}
          onChange={(e) => form.setData('email', e.target.value)}
        />
        <Button type="submit" loading={form.processing}>
          Join the newsletter
        </Button>
      </div>
    </form>
  )
}
