import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // Tailwind v4 と相性良い
  },
};

export default nextConfig;
