// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Make the workspace root explicit so Next.js doesn't guess the parent folder
    root: ".",
  },
};
export default nextConfig;
