/** @type {import('next').NextConfig} */
import withTM from 'next-transpile-modules'
const three = withTM.three

const nextConfig = {
    transpilePackages: ['three'],
  
};

export default nextConfig;
// next.config.js
// import withBundleAnalyzer from '@next/bundle-analyzer';

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });


// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // images: {
//   //   domains: ['yourdomain.com'], // Add any image domains you are using
//   // },
//   experimental: {
//     optimizeFonts: true, // Optimize fonts loading
//     optimizeImages: true, // Optimize images loading
//   },
// };
// export default bundleAnalyzer(nextConfig);
