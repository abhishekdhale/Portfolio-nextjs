/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
    domains: ['drive.google.com'], // Optional if using remotePatterns
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
