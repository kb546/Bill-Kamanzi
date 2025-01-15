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
    maxDuration: 60
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: "https" }],
    format: ['webp'],
    quality: 80,
    cacheDir: "./.cache/image",
    // Add reasonable sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
});