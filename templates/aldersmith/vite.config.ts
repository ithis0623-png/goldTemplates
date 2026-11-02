import { defineConfig } from 'vite'

export default defineConfig({
  root: './site',
  css: {
    postcss: {
      plugins: []
    }
  },
  server: {
    port: 3000,
    open: false,
    host: true,
    hmr: {
      overlay: false
    }
  }
})
