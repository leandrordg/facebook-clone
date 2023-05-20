/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'thumbs.dreamstime.com',
      'scontent.fcpq5-1.fna.fbcdn.net',
    ],
  },
};

module.exports = nextConfig;
