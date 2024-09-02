import * as React from 'react'
import Tab from './tab'
import Logo from './logo'
import AccountDropdown from './account_dropdown'
import { IconSlash } from '@tabler/icons-react'
import { Link } from '@inertiajs/react'

interface AdminLayoutProps extends React.PropsWithChildren {}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <main className="min-h-screen w-full">
      <div className="sticky -top-16 z-20 border-b border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link className="hover:opacity-75 transition" href="/overview">
                <Logo className="w-8" />
              </Link>
              <IconSlash className="text-neutral-200" />
              <span className="text-sm text-neutral-700 font-bold">Administration Panel</span>
            </div>
            <div className="flex items-center space-x-6">
              <AccountDropdown />
            </div>
          </div>
          <div className="relative flex gap-x-2 overflow-x-auto transition-all">
            <Tab href="/admin/blog" label="Blog" />
            <Tab href="/admin/users" label="Users" />
            <Tab href="/admin/analytics" label="Analytics" />
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
