const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(PROJECT_ROOT, 'src/client/index'),
  module: {
    loaders: [{
      exclude: /node_modules/,
      include: [PROJECT_ROOT],
      loaders: ['babel-loader'],
      test: /\.js$/,
    }],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(PROJECT_ROOT, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_ROOT, 'src/client/assets/index.html'),
    }),
  ],
};
