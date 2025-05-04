// next.config.js
import withVideos from 'next-videos';

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
    unoptimized: true,
  },
  transpilePackages: ['mui-tel-input'],

  ...withVideos(),
};

export default nextConfig;
