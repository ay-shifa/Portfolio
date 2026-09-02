/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH;

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

const basePath = envBasePath !== undefined ? envBasePath : (isProd ? getRepoBasePath() : '');

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

