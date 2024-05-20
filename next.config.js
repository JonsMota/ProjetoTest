import withBundleAnalyzer from '@next/bundle-analyzer'

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})({
  reactStrictMode: true,
  experimental: {
    reactRoot: true
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['images.unsplash.com'],
  },
})