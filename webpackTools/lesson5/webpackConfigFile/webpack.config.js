const path = require('path');

module.exports = {
  entry: {
    profile: './src/profile/index.jsx',
    dashboard: './src/dashboard/index.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
};
