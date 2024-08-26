import User from '#users/database/models/user'
import { BaseEvent } from '@adonisjs/core/events'

export default class UserCreated extends BaseEvent {
  constructor(public user: User) {
    super()
  }
}
