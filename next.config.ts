import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
        pathname: '/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      },
    ],
  },
};

export default nextConfig;
