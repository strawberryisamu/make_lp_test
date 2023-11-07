/** @type {import('next').NextConfig} */


const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

module.exports = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  experimental: {
    appDir: true,
  },
};
