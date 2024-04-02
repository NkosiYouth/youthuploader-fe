import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    BASE_URL: JSON.stringify('http://127.0.0.1:5000/api/'), // Replace 'https://example.com' with your actual base URL
  },
})
