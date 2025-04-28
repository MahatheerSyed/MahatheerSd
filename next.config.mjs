/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
    autoPrerender: false,
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  devIndicators: false,
};

export default nextConfig;
