import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos'
    }],
    unoptimized: true
  },
  basePath: "",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
