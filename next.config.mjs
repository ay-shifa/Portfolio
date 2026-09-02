import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Check if a custom domain CNAME file exists in root or public directory
const hasCustomDomain =
  fs.existsSync(path.join(process.cwd(), 'CNAME')) ||
  fs.existsSync(path.join(process.cwd(), 'public', 'CNAME'));

// Respect NEXT_PUBLIC_BASE_PATH or BASE_PATH even when empty string '' (which is passed on custom domains)
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH;

// Detect repo name from GitHub Actions env if not explicitly passed
const getRepoBasePath = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repo && !repo.toLowerCase().endsWith('.github.io')) {
      return `/${repo}`;
    }
  }
  return '';
};

// If using custom domain, base path must be root ('').
// Otherwise, use envBasePath if defined, or fallback to repo name in prod.
const basePath = hasCustomDomain
  ? ''
  : (envBasePath !== undefined ? envBasePath : (isProd ? getRepoBasePath() : ''));

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
};

export default nextConfig;

