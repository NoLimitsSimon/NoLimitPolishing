import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `images.unoptimized: true` was shipping 4–6 MB iPhone originals into
  // 300px slots (16 MB home page). Let next/image resize and serve AVIF/WebP.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // www isn't attached to the Vercel project; if it ever is, send it to apex.
      { source: "/:path*", has: [{ type: "host", value: "www.nolimitpolishing.com" }], destination: "https://nolimitpolishing.com/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
