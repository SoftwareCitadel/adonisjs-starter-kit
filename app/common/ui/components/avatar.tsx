import * as React from 'react'
import getInitials from '#common/ui/lib/initials'
import useUser from '#auth/ui/hooks/use_user'

export default function Avatar() {
  const user = useUser()
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-zinc-800 to-zinc-600 border text-zinc-200 shadow-sm">
      <span className="font-medium">{getInitials(user.fullName)}</span>
    </div>
  )
}
