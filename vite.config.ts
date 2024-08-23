import { defineConfig } from 'vite'
import inertia from '@adonisjs/inertia/client'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'app/core/ui/app/ssr.tsx' } }),
    react(),
    adonisjs({
      entrypoints: ['app/core/ui/app/app.tsx'],
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
