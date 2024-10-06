import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    APIFY_API_TOKEN: process.env.APIFY_API_TOKEN,
  },
  experimental: {
    serverComponentsExternalPackages: ['@vercel/kv'],
  },
};

// do not use module.exports here ever, it doesnt work 
export default nextConfig;