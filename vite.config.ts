/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  proxy: {
    "/*" : "http://localhost:4000"
  }
},
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './__tests__/setup.js',
  css: true,
},
})
