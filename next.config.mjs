import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['admissionscircle.com', 'studysmart.co.in','leapscholar.com','leverageedu.com],
        unoptimized: true,
      },
      webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
      },
};

export default nextConfig;
