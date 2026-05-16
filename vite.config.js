// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/',
  server: {
    allowedHosts: ['.trycloudflare.com',".github.io"]
  }
})
