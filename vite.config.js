import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[local]__[hash:base64:5]',
    },
  },
})
