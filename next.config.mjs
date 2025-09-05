import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({})

// Export the final Next.js config with Nextra included
export default withNextra({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
})