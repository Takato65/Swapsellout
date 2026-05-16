// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Swapsellout/',
  server: {
    allowedHosts: ['.trycloudflare.com']
  }
})
