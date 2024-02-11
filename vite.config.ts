import { defineConfig } from 'vite'
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/guide/env-and-mode.html#env-variables - how to use ENV with vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})