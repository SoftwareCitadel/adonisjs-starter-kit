import React from 'react'
import Footer from './footer'
import Nav from './nav'

export interface MarketingLayoutProps extends React.PropsWithChildren {}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Nav />
      <main className="px-6 lg:px-0">{children}</main>
      <Footer />
    </>
  )
}
