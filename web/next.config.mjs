import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* Serve portfolio assets at full resolution — do not generate smaller variants. */
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'static.beginlearning.com' },
    ],
  },
  /* Pin Turbopack root: repo root is often opened as "design portfolio/" without its own package.json,
     so auto-detection can treat the wrong directory as the project root and fail to resolve `tailwindcss`. */
  turbopack: {
    root: __dirname,
    resolveAlias: {
      tailwindcss: path.join(__dirname, "node_modules/tailwindcss"),
    },
  },
};

export default nextConfig;
