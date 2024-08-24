import * as React from 'react'
import Tab from './tab'
import Logo from './logo'
import AccountDropdown from './account_dropdown'
import { IconSlash } from '@tabler/icons-react'
import Avatar from './avatar'
import useUser from '#auth/ui/hooks/use_user'

interface DashboardLayoutProps extends React.PropsWithChildren {}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = useUser()
  return (
    <main className="min-h-screen w-full">
      <div className="sticky -top-16 z-20 border-b border-zinc-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo className="w-8" />
              <IconSlash className="text-zinc-200" />
              <Avatar />
              <span className="text-sm text-zinc-700 font-medium">{user.fullName}</span>
            </div>
            <div className="flex items-center space-x-6">
              <AccountDropdown />
            </div>
          </div>
          <div className="relative flex gap-x-2 overflow-x-auto transition-all">
            <Tab href="/billing" label="Billing" />
            <Tab href="/settings" label="Settings" />
          </div>
        </div>
      </div>
      <div className="py-8 flex w-full items-center">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-20 flex flex-col gap-y-3">
          {children}
        </div>
      </div>
    </main>
  )
}
