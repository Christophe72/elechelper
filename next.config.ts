/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compression automatique
  compress: true,

  // Optimisation des images
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Headers de cache
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
