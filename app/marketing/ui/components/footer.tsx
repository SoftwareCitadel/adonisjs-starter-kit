import Logo from '#common/ui/components/logo'
import usePageProps from '#common/ui/hooks/use_page_props'
import { Link } from '@inertiajs/react'
import React from 'react'
import SignUpToNewsletterForm from '#newsletter/ui/components/sign_up_to_newsletter_form'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-5xl space-y-6 p-6 mx-auto my-8 lg:p-0">
        <div className="flex flex-col justify-between gap-x-4 md:flex-row">
          <div className="flex flex-col gap-y-4 max-w-96">
            {/* Branding part */}
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 hover:opacity-50 transition-opacity">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <span className="font-medium text-lg">{import.meta.env.VITE_APP_NAME}</span>
            </div>

            {/* Newsletter part */}
            <p className="text-sm text-neutral-500">
              Join the newsletter to get {import.meta.env.VITE_APP_NAME}'s latest news.
            </p>
            <SignUpToNewsletterForm />
          </div>

          {/* General links */}
          <div className="flex flex-col text-sm leading-6 text-neutral-500 gap-x-10 md:flex-row">
            <div>
              <h4 className="mt-4 sm:mt-0 sm:mb-4 text-xs font-semibold uppercase">General</h4>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <Link
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="/auth/sign_up"
                  >
                    Create an Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="/auth/sign_in"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="mt-4 sm:mt-0 sm:mb-4 text-xs font-semibold uppercase">Legal</h4>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <a
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="/privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="/tos"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="/tos"
                  >
                    Subprocessors
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mt-4 sm:mt-0 sm:mb-4 text-xs font-semibold uppercase">Social</h4>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <a
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="https://discord.gg/vnHMfVxpPr"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="https://x.com/softwarecitadel"
                  >
                    X (formerly Twitter)
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-700 hover:text-neutral-500 transition-colors"
                    href="https://www.linkedin.com/company/softwarecitadel"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="flex flex-col justify-between text-sm text-center text-neutral-500 md:flex-row md:text-left">
          <p className="">
            © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}.
          </p>
          <p className="">Made with ❤️ from 🇫🇷.</p>
        </div>
      </div>
    </footer>
  )
}
