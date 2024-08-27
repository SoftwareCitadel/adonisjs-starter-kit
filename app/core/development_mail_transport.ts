import { cuid } from '@adonisjs/core/helpers'
import logger from '@adonisjs/core/services/logger'
import { MailResponse } from '@adonisjs/mail'
import { MailTransportContract, NodeMailerMessage, ResponseEnvelope } from '@adonisjs/mail/types'
import previewEmail from 'preview-email'

export default class DevelopmentMailTransport implements MailTransportContract {
  /**
   * Send message
   */
  async send(message: NodeMailerMessage): Promise<MailResponse<NodeMailerMessage>> {
    message.messageId = cuid()

    const url = await previewEmail(message)

    logger.debug({ messageId: message.messageId, url }, 'Preview URL for email')

    return new MailResponse(message.messageId, undefined as unknown as ResponseEnvelope, message)
  }
}
