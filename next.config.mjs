/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/casi-studio",
        destination: "/progetti",
        permanent: true,
      },
      {
        source: "/casi-studio/:slug",
        destination: "/progetti/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
