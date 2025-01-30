
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
      includePaths: ['./node_modules'],
      logger: {
        warn: function(message) {
          // Only show non-deprecation warnings
          if (!message.includes('Deprecation')) {
            console.warn(message);
          }
        }
    }
  }
}

export default nextConfig;