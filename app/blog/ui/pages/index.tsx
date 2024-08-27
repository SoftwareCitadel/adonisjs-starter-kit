import AdminLayout from '#common/ui/components/admin_layout'
import { buttonVariants } from '#common/ui/components/button'
import { Link } from '@inertiajs/react'
import * as React from 'react'

export default function BlogPage() {
  return (
    <AdminLayout>
      <div className="flex gap-x-4 w-full justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold">Blog Management</h2>
        <Link className={buttonVariants({ variant: 'primary' })} href="/admin/blog/create">
          Write new blog post
        </Link>
      </div>
    </AdminLayout>
  )
}
