/** @type {import('next').NextConfig} */


const branchName = process.env.REPOSITORY_NAME ? "/" + process.env.REPOSITORY_NAME: "";

module.exports = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  experimental: {
    appDir: true,
  },
};
