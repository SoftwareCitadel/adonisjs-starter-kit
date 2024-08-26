import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import geoIPLite from 'geoip-lite'
import Visit from '#analytics/database/models/visit'
import UAParser from 'ua-parser-js'

export default class GatherVisitInformation {
  @inject()
  async handle({ ctx }: { ctx: HttpContext }) {
    // Extracting required information
    const link = ctx.request.url()
    const ip = ctx.request.ip()
    const referrer = ctx.request.header('referer') || ''

    // Parse user agent
    const userAgent = ctx.request.header('user-agent') || ''

    const parser = new UAParser(userAgent)
    const browserInfo = parser.getBrowser()
    const osInfo = parser.getOS()
    const deviceInfo = parser.getDevice()

    // Get country from IP
    const geoData = geoIPLite.lookup(ip)

    // Create a new Visit record
    await Visit.create({
      link,
      country: geoData?.country || 'Unknown',
      browser: this.getBrowserInfo(browserInfo),
      os: `${osInfo.name} ${osInfo.version}`,
      device: this.getDeviceInfo(deviceInfo),
      referrer,
    })
  }

  private getBrowserInfo(browser: UAParser.IBrowser): string {
    return `${browser.name} ${browser.version}`.trim()
  }

  private getDeviceInfo(device: UAParser.IDevice): string {
    if (device.type) {
      return device.type.charAt(0).toUpperCase() + device.type.slice(1)
    }
    return 'Desktop' // Assume desktop if device type is not detected
  }
}
