/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/soil_psorms_api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL_INTERNAL}${process.env.NEXT_PUBLIC_PSORMS_API_PATH}/:path*`,
        basePath: false,
      },
    ];
  },
  i18n,
};

export default nextConfig;
