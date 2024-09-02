import * as React from 'react'
import MarketingLayout from '#marketing/ui/components/marketing_layout'
import { IconFileDescription } from '@tabler/icons-react'
import TrySection from '#marketing/ui/components/try_section'

export default function TermsOfServicePage() {
  return (
    <MarketingLayout>
      <div className="min-h-[calc(100vh-86px)] mx-auto max-w-3xl h-full flex flex-col items-center p-6 lg:mt-12">
        <h2 className="font-semibold flex items-center gap-x-2 text-center text-2xl sm:text-3xl">
          <span>Terms of Service</span>
          <IconFileDescription className="text-neutral-500" />
        </h2>
        <p className="pb-8 text-center text-neutral-500">
          This document outlines the terms and conditions that apply to your use of our services.
        </p>
        <div className="border-y w-full prose prose-neutral">
          <div className="p-6">
            <h3 className="font-semibold text-lg">1. Terms</h3>
            <p>
              By accessing this website, you are agreeing to be bound by these terms of service, all
              applicable laws and regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site. The materials contained in this website
              are protected by applicable copyright and trade mark law.
            </p>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information
              or software) on {import.meta.env.VITE_APP_NAME}'s website for personal non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title, and
              under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public display (commercial
                or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained on{' '}
                {import.meta.env.VITE_APP_NAME}'s website;
              </li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>
                transfer the materials to another person or "mirror" the materials on any other
                server.
              </li>
            </ul>

            <p>
              This license shall automatically terminate if you violate any of these restrictions
              and may be terminated by {import.meta.env.VITE_APP_NAME} at any time. Upon terminating
              your viewing of these materials or upon the termination of this license, you must
              destroy any downloaded materials in your possession whether in electronic or printed
              format.
            </p>
          </div>
        </div>
        <TrySection />
      </div>
    </MarketingLayout>
  )
}
