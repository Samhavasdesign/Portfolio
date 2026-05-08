import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Pin Turbopack root when a lockfile exists above this app (avoids stale/wrong module graphs in dev). */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
