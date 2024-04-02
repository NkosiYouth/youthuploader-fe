import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    BASE_URL: JSON.stringify('https://youthuploader-be.onrender.com/api/'), // Replace 'https://example.com' with your actual base URL
  },
})
