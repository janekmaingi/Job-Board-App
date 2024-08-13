/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "job-board-app.s3.amazon.com",
      },
    ],
  },
};

export default nextConfig;
