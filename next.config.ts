import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { locales } from './i18n';

const withNextIntl = createNextIntlPlugin('./i18n.ts');
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
};

export default withNextIntl(nextConfig);
