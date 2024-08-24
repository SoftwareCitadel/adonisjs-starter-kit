import User from '#auth/database/models/user'
import { BaseEvent } from '@adonisjs/core/events'

export default class UserCreated extends BaseEvent {
  constructor(public user: User) {
    super()
  }
}
