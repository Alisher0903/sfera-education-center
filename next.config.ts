import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['142.93.106.195'],
    },
    pageExtensions: ['page.tsx', 'page.ts'],
};

export default nextConfig;
