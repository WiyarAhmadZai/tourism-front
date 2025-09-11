// vite.config.js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    hmr: {
      overlay: false
    }
  }
})