import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind()
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
    includeFiles: ['./dist/**'],
    functionPerRoute: false
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: "https" }],
    format: ['webp'],
    quality: 80
  }
});