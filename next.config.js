/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Performance Optimizations
  swcMinify: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression
  compress: true,
  
  // Optimize production builds
  poweredByHeader: false,
  generateEtags: true,
  
  // Reduce bundle size
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
  
  // Output optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  
  // Production URL (update this when deploying)
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig
