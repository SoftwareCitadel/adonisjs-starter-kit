import type { Config } from 'tailwindcss'

import tailwindcssForms from '@tailwindcss/forms'

export default {
  content: ['./resources/**/*.edge', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssForms],
} satisfies Config
