/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
