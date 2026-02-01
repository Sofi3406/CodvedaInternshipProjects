import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import viteImagemin from 'vite-plugin-imagemin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      // Fast Refresh optimization
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            { ssr: false, displayName: true, preprocess: false }
          ]
        ]
      }
    }),
    
    // Image optimization (WebP + AVIF)
    viteImagemin({
      webp: { quality: 80 },
      avif: { speed: 6 },
      png: { quality: 80 },
      jpeg: { quality: 80 }
    }),

    // PWA (Offline caching)
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,webp}']
      },
      manifest: {
        name: 'Optimized Vite React App',
        short_name: 'ViteReact',
        theme_color: '#4f46e5',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],

  // Performance optimizations
  build: {
    sourcemap: false,  // Production
    minify: 'terser',  // Aggressive minification
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.logs
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 800,  // Allow larger chunks
    rollupOptions: {
      output: {
        // Manual vendor chunk (40% size reduction)
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['sonner']
        },
        // Preload critical chunks
        chunkFileNames: 'chunks/[name].[hash].js'
      }
    }
  },

  // Dev server optimizations
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },

  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
