import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // EXTREM DE IMPORTANT: Numele repository-ului între slash-uri
  base: '/smartstock-landing/', 
})
