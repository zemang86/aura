import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aura-delta-seven.vercel.app" }],
        destination: "https://afhe.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
