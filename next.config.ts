import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Credit: https://github.com/zenatron
   * Awesome little ternary that excludes error messages on client
   */
  compiler: {
    removeConsole:
    process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  }
};

export default nextConfig;
