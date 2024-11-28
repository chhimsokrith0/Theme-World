/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bn', 'ca', 'hi', 'hk', 'id', 'kh', 'ko', 'lo', 'mm', 'ms', 'ph', 'pt', 'sg', 'th', 'tw', 'ur', 'vi', 'zh'],
  },
  // Configure static file serving
  async headers() {
    return [
      {
        source: '/locales/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
    ];
  },
  
  // This is important for serving static files from the public directory
  async rewrites() {
    return [
      {
        source: '/locales/:path*',
        destination: '/public/locales/:path*',
      },
    ];
  },

};

export default nextConfig;
