/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [{ source: "/ikigai/app", destination: "/ikigai/app/index.html" }];
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
      {
        source: "/progetti/automazione-promemoria-appuntamenti",
        destination: "/progetti/dentista-automazione",
        permanent: true,
      },
      {
        source: "/progetti/ordine-pagamento-qr",
        destination: "/progetti",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
