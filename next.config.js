// next.config.js
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },

  output: 'standalone',

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    // ✅ Add alias support for "@"
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};

export default nextConfig;
