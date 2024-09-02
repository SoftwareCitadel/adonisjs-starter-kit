import useUser from '#auth/ui/hooks/use_user'
import DashboardLayout from '#common/ui/components/dashboard_layout'
import * as React from 'react'

export default function OverviewPage() {
  const user = useUser()
  return (
    <DashboardLayout>
      <h2 className="text-xl sm:text-2xl font-semibold">
        Welcome back,
        {' ' + user.fullName}!
      </h2>
    </DashboardLayout>
  )
}
