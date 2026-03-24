/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bilkamanzi.com' }],
        destination: 'https://www.bilkamanzi.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig


