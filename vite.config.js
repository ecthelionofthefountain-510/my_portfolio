import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_portfolio/', // <-- lägg till denna rad
  plugins: [react()],
});
