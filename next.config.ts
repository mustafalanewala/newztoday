import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'newssiteimages.timesmed.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
