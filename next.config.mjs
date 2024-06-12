/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
        protocol: "https",
        port: "",
        pathname: "**",
      },
      {
        hostname: "media.gettyimages.com",
        protocol: "https",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
