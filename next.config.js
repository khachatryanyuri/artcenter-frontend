// next.config.js
import withVideos from 'next-videos';

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
    unoptimized: true,
  },
  transpilePackages: ['mui-tel-input'],
  i18n: {
    locales: ['hy', 'en', 'ru'],
    defaultLocale: 'hy',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/:locale(en|ru|hy){/}?/:path*',
        destination: '/:path*',
      },
    ];
  },

  ...withVideos(),
};

export default nextConfig;
