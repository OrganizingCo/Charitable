/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [react()],
  server: {
    port: 3000,
  proxy: {
    "/*" : "http://localhost:4000"
  }
}
})
