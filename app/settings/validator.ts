import vine from '@vinejs/vine'

export const settingsValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim().normalizeEmail(),
    newPassword: vine
      .string()
      .minLength(8)
      .trim()
      .confirmed({ confirmationField: 'confirmPassword' })
      .optional(),
  })
)
