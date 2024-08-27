import AdminLayout from '#common/ui/components/admin_layout'
import Card from '#common/ui/components/card'
import { useForm } from '@inertiajs/react'
import * as React from 'react'
import { AreaChart, Card as TremorCard, List, ListItem } from '@tremor/react'
import clsx from 'clsx'

const data = [
  {
    date: 'Jan 23',
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: 'Feb 23',
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: 'Mar 23',
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: 'Apr 23',
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: 'May 23',
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: 'Jun 23',
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: 'Jul 23',
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: 'Aug 23',
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: 'Sep 23',
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: 'Oct 23',
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: 'Nov 23',
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: 'Dec 23',
    Organic: 321,
    Sponsored: 0,
  },
]

const summary = [
  {
    name: 'Organic',
    value: 3273,
  },
]

const valueFormatter = (number) => `${Intl.NumberFormat('us').format(number).toString()}`

const statusColor = {
  Organic: 'bg-blue-500',
  Sponsored: 'bg-violet-500',
}

export default function AnalyticsPage() {
  const form = useForm({
    period: 'last_24_hours',
  })
  return (
    <AdminLayout>
      <div className="flex gap-x-4 w-full justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold">Analytics</h2>
        <select
          className="block cursor-pointer rounded-md border border-neutral-300 mt-1 py-1.5 text-neutral-900 shadow-sm transition placeholder:text-neutral-400 focus:border focus:border-neutral-500 focus:ring focus:ring-neutral-200 sm:text-sm sm:leading-6"
          value={form.data.period}
          onChange={(e) => form.setData('period', e.target.value)}
        >
          <option value="last_24_hours">Last 24 hours</option>
          <option value="last_7_days">Last 7 days</option>
          <option value="last_30_days">Last 30 days</option>
        </select>
      </div>

      <Card title="Visits">
        <AreaChart
          data={data}
          index="date"
          categories={['Organic']}
          colors={['blue', 'violet']}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          showGradient={false}
          startEndOnly={true}
          className="mt-6 h-32"
        />
        <List className="mt-2">
          <ListItem>
            <div className="flex items-center space-x-2">
              <span className={clsx(statusColor['Organic'], 'h-0.5 w-3')} aria-hidden={true} />
              <span>Organic</span>
            </div>
            <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {valueFormatter(3273)}
            </span>
          </ListItem>
        </List>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Link"></Card>
        <Card title="Country"></Card>
        <Card title="Browser"></Card>
        <Card title="OS"></Card>
        <Card title="Device"></Card>
        <Card title="Referrer"></Card>
      </div>
    </AdminLayout>
  )
}
