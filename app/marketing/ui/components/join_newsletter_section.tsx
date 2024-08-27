import SignUpToNewsletterForm from '#newsletter/ui/components/sign_up_to_newsletter_form'
import { IconMail } from '@tabler/icons-react'
import * as React from 'react'

export default function JoinNewsletterSection() {
  return (
    <section className="border-t py-16">
      <h2 className="flex justify-center items-center font-semibold text-center text-2xl sm:text-3xl">
        <span>Join our newsletter.</span>
        <IconMail className="ml-2 text-neutral-500" />
      </h2>
      <p className="pb-8 text-center text-neutral-500">
        Get the latest updates on new articles, tutorials, and more.
      </p>
      <SignUpToNewsletterForm />
      <p className="text-sm text-center text-neutral-500">
        No spam. No trackers. No ads. Unsubscribe at any time.
      </p>
    </section>
  )
}
