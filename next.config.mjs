
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    reactStrictMode: true,
    includePaths: [path.join(__dirname, 'node_modules')],
  },
}

export default nextConfig;