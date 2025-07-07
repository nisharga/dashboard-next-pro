import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

// Bundle analyzer config
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

// Base Next.js config
const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ['@/components/ui']
    }
};

export default withBundleAnalyzer(nextConfig);
