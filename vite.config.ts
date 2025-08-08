import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf'],
  server: {
    port: 5500,
    host:true
  },
  preview: {
    port: 5333,
    host: true
  }
})
