import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 Desliga ESLint só durante o build (no dev continua avisando)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
