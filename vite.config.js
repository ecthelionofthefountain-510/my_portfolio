import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})



// när man ska nygga för github pages kör:

// VITE_BASE_PATH=/my_portfolio/ npm run build