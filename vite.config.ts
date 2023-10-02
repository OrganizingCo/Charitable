import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: 3000,
  proxy: {
    "/*" : "http://localhost:4000"
  }
})
