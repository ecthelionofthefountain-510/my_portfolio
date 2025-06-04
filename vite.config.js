import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my_portfolio/',
  plugins: [react()],
})



// när man ska deploya till Vercel, ändra till detta nedanför:


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: process.env.VITE_BASE_PATH || '/',
//   plugins: [react()],
// })