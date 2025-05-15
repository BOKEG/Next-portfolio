import type { NextConfig } from "next";
module.exports = {
  output: 'export', // Enables static HTML export
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  output: 'export', // (if using static export)
};
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
