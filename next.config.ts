import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['142.93.106.195'],
    },
    staticPageGenerationTimeout: 120,
};

export default nextConfig;
