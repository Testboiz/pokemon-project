import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pokeapi-215911.firebaseapp.com/api/v2/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
        
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('User-Agent', 'Pokemon App JDT-17');
          });
        },
      },
    },
  },
})
