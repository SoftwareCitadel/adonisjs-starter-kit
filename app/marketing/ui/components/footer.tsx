import usePageProps from '#common/ui/hooks/use_page_props'
import React from 'react'

export default function Footer() {
  const { appName } = usePageProps<{ appName: string }>()
  return (
    <footer className="max-w-5xl space-y-6 p-6 mx-auto my-8 md:p-4">
      <div className="flex flex-col justify-between gap-x-4 md:flex-row">
        <div className="flex flex-col gap-y-4 max-w-96">
          <div>
            <a href="/">
              <img alt="Maybe Logo" className="w-10 inline" src="/assets/icon-logo-5c1345a0.svg" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Join the waitlist to get notified when a hosted version of the app is available.
          </p>
          <form className="space-y-4" action="/signups" accept-charset="UTF-8" method="post">
            <input
              type="hidden"
              name="authenticity_token"
              value="cIqOyVIqpLupLdgTEMakQq3l0vxRzCsrjbK0G48ZXIUJ6YinNltA2tY0PWQ9FLbbeZFN7BTEYyOJkk82ONKNsQ"
            />
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
            <h4 className="mb-4 text-xs font-medium uppercase">More</h4>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a className="text-[#141414]" href="https://link.maybe.co/discord">
                  Join Community
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="https://github.com/maybe-finance/maybe">
                  Self-Host
                </a>
              </li>
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
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">Social</h4>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a className="text-[#141414]" href="https://link.maybe.co/discord">
                  Discord
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="https://twitter.com/maybe">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-[#141414]" href="https://linkedin.com/company/maybe-finance">
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
