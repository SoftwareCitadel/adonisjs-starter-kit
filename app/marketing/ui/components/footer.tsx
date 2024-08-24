import Logo from '#common/ui/components/logo'
import usePageProps from '#common/ui/hooks/use_page_props'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Footer() {
  const { appName } = usePageProps<{ appName: string }>()
  return (
    <footer className="max-w-5xl space-y-6 p-6 mx-auto my-8 md:p-4">
      <div className="flex flex-col justify-between gap-x-4 md:flex-row">
        <div className="flex flex-col gap-y-4 max-w-96">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 hover:opacity-50 transition-opacity">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <span className="font-medium text-lg">{appName}</span>
          </div>
          <p className="text-sm text-gray-500">
            Join the waitlist to get notified when a hosted version of the app is available.
          </p>
          <form className="space-y-4" action="/signups" accept-charset="UTF-8" method="post">
            <div className="flex flex-row w-full p-1 mb-4 bg-white border shadow-xs rounded-xl">
              <input
                className="flex-1 border-0 px-2 focus:ring-0 text-sm"
                placeholder="Enter your email address"
                required
                type="email"
                name="email"
                id="email"
              />
              <input
                type="submit"
                name="commit"
                value="Join waitlist"
                className="py-2 px-3 font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 border border-gray-900 text-sm"
                data-disable-with="Join waitlist"
              />
            </div>

            <p className="text-xs text-gray-500">
              Don't want to wait?{' '}
              <a href="https://github.com/maybe-finance/maybe" className="text-gray-900 underline">
                Self-host
              </a>{' '}
              an early version of Maybe.
            </p>
          </form>
        </div>
        <div className="flex flex-col text-sm leading-6 text-gray-500 gap-x-10 md:flex-row">
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">General</h4>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a className="text-[#141414]" href="/articles">
                  Articles
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="/financial-terms">
                  Financial Terms
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="/tools">
                  Tools
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="https://github.com/maybe-finance/maybe">
                  Contribute
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">Legal</h4>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a className="text-[#141414]" href="/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="/tos">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="/tos">
                  Subprocessors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">Social</h4>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a className="text-[#141414]" href="https://discord.gg/vnHMfVxpPr">
                  Discord
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="https://x.com/softwarecitadel">
                  X (formerly Twitter)
                </a>
              </li>
              <li>
                <a
                  className="text-[#141414]"
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
      <div className="flex flex-col justify-between text-sm text-center text-gray-500 md:flex-row md:text-left">
        <p className="">
          © {new Date().getFullYear()} {appName}.
        </p>
        <p className="">Made with ❤️ from 🇫🇷.</p>
      </div>
    </footer>
  )
}
