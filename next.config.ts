import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.2.9", "192.168.*.*", "*.local"],
  cacheComponents: true,
  experimental: {
    agentFeedback: true,
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        as: "*.css",
        loaders: ["@tailwindcss/turbopack"],
      },
    },
  },
};

export default nextConfig;
