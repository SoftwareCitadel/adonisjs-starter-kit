import React from 'react'
import MarketingLayout from '#marketing/ui/components/marketing_layout'
import TrySection from '#marketing/ui/components/try_section'
import Faq from '#marketing/ui/components/faq'
import LandingHero from '#marketing/ui/components/landing_hero'

export default function LandingPage() {
  return (
    <MarketingLayout>
      <LandingHero />
      <Faq />
      <TrySection />
    </MarketingLayout>
  )
}
