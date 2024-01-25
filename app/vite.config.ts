import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    }
  },
  plugins: [
    react(),
    ViteRestart({
      restart: ['./src/**/*'] 
    }),
  ],
})
