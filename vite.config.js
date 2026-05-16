// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/.proxy/Swapsellout/',
  server: {
    allowedHosts: ['.trycloudflare.com',".github.io"]
  }
})
