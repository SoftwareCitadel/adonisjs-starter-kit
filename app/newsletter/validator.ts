import vine from '@vinejs/vine'

export const registerToNewsletterValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim().normalizeEmail(),
  })
)
