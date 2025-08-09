const isGithub = process.env.GITHUB_ACTIONS === 'true' || process.env.NEXT_PUBLIC_BASE_PATH;
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '/REPO_NAME';
/** @type {import('next').NextConfig} */
/**
 * Next.js configuration
 *
 * We remove the `unoptimized` flag from the images configuration to allow
 * Next.js to automatically optimize images. This enables features like
 * responsive srcset generation and modern formats (WebP/AVIF) which can
 * significantly reduce page weight and improve loading speed without any
 * additional configuration. See https://nextjs.org/docs/api-reference/next/image#optimization for details.
 */
const nextConfig = {
  output: 'export',
  // Enable built‑in image optimisation. Leaving the `images` property empty
  // allows Next.js to handle optimisation automatically.
  images: {},
  assetPrefix: isGithub ? repo + '/' : undefined,
  basePath: isGithub ? repo : undefined,
};
export default nextConfig;