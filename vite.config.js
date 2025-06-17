import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/kdrsid"
})
    //"predeploy": "npm run build", in package.json
    //"deploy": "gh-pages -d dist"