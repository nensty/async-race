const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: true,
    host: 'localhost',
    static: {
      directory: path.join(__dirname, '/'),
    },
  },
};
