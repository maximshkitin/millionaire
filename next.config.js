const path = require('path');

module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/millionaire' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/millionaire/' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}