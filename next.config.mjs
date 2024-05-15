/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kompresja zasobów przy użyciu Gzip lub Brotli
  compress: true,

  // Optymalizacja obrazów
  images: {
    domains: ["natek.netlify.app"], // Dodaj swoją domenę
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Minifikacja kodu JavaScript i CSS
  swcMinify: true,

  webpack: (config, { isServer }) => {
    // Asynchroniczne ładowanie skryptów
    config.output.filename = "static/chunks/[name].[contenthash].js";
    config.output.chunkFilename = "static/chunks/[name].[contenthash].js";

    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 70000,
      };
    }

    return config;
  },
};

export default nextConfig;
