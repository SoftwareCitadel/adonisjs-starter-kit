import { Router } from '@adonisjs/core/http'

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    router: Router
  }
}
