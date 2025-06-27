import type { NextConfig } from "next";
import next from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'iili.io',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
