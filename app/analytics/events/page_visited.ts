import { BaseEvent } from '@adonisjs/core/events'
import { HttpContext } from '@adonisjs/core/http'

export default class PageVisited extends BaseEvent {
  constructor(public ctx: HttpContext) {
    super()
  }
}
