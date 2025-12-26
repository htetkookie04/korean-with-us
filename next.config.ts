import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  typescript: {
    // Skip type checking during build for old Vite files
    ignoreBuildErrors: false,
  },
  eslint: {
    // Already configured to ignore these files
    ignoreDuringBuilds: false,
  },
  webpack: (config, { isServer }) => {
    // Ignore react-router-dom and react-helmet-async imports
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': false,
      'react-helmet-async': false,
    };
    
    // Exclude old Vite/React Router files from compilation
    config.module.rules.push({
      test: /src\/(pages|App|main|index)\.(tsx?|jsx?)$/,
      use: 'ignore-loader',
    });
    
    // Also ignore at the NormalModuleFactory level
    const originalResolve = config.resolve;
    config.resolve = {
      ...originalResolve,
      alias: {
        ...originalResolve?.alias,
        '@/pages': false,
      },
    };
    
    return config;
  },
};

export default nextConfig;
