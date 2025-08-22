import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 Só ignora no build (dev continua te avisando)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
