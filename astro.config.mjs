import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind()
  ],
  output: 'server',
  adapter: vercel(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: "https" }],
    format: ['webp', 'avif'],
    quality: 80
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'critical': ['./src/components/Header.astro', './src/components/Footer.astro']
          }
        }
      }
    }
  }
});