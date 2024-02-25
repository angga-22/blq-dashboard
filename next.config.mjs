/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.testvalley.kr",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    BASE_API_ASSETS: process.env.BASE_API_ASSETS,
  },
};

export default nextConfig;
