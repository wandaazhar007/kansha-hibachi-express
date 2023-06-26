/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sangw.in', 'localhost', 'picsum.photos', 'kanshaapi.birojasa-sahabat.com'] // <== Domain name
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
