import Script from 'next/script'

export default function Analytics() {
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

  // Only load analytics in production and when environment variables are set
  if (process.env.NODE_ENV !== 'production' || !umamiUrl || !websiteId) {
    return null
  }

  return (
    <Script
      src={`${umamiUrl}/script.js`}
      data-website-id={websiteId}
      strategy='afterInteractive'
      defer
    />
  )
}
