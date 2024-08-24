import * as React from 'react'
import { IconChevronDown, IconSettings, IconLogout } from '@tabler/icons-react'
import { Link, useForm } from '@inertiajs/react'
import Avatar from './avatar'
import useUser from '#auth/ui/hooks/use_user'

export default function AccountDropdown() {
  const user = useUser()

  /**
   * Dropdown logic.
   */
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  /**
   * Sign out logic.
   */
  const signOutForm = useForm()

  const handleSignOut = (e: React.FormEvent) => {
    e.preventDefault()
    signOutForm.post('/auth/sign_out')
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center w-full rounded-md border border-zinc-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
        onClick={toggleDropdown}
      >
        <Avatar />

        <IconChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="flex flex-col px-4 py-2">
            <span className="font-semibold text-sm">{user.fullName}</span>
            <span className="text-xs">{user.email}</span>
          </div>
          <hr />
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href={`/settings`}
              className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
            >
              <IconSettings className="inline-block mr-2 h-4 w-4" />
              <span>Account Settings</span>
            </Link>
            <a
              className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
              onClick={handleSignOut}
            >
              <IconLogout className="inline-block mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
