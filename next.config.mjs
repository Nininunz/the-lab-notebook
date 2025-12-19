import nextra from 'nextra'

// Bundle analyzer
const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
  enabled: process.env.ANALYZE === 'true',
})

// Set up Nextra with its configuration
const withNextra = nextra({})

// Export the final Next.js config with Nextra included
export default withBundleAnalyzer(
  withNextra({
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: false,
    },

    // Fix workspace root warning
    outputFileTracingRoot: process.cwd(),

    // Production optimizations
    compress: true,
    poweredByHeader: false,

    // Image optimization
    images: {
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 31536000, // 1 year
    },

    // Headers for security and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://analytics.umami.is; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://analytics.umami.is; frame-ancestors 'self';",
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=(), payment=()',
            },
          ],
        },
        {
          source: '/images/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ]
    },
  })
)
