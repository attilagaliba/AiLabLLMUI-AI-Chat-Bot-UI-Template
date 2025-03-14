/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig; 