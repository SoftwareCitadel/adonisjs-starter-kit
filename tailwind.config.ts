import type { Config } from 'tailwindcss'

export default {
  content: ['./resources/**/*.edge', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
