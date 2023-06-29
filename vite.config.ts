import { defineConfig } from 'vite'
import { config as dotenvConfig } from 'dotenv'
import react from '@vitejs/plugin-react'

dotenvConfig()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
