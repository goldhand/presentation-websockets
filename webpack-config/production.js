const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(PROJECT_ROOT, 'src/client/index'),
    path.resolve(PROJECT_ROOT, './src/client/assets/style.css'),
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      include: [PROJECT_ROOT],
      loaders: ['babel-loader'],
      test: /\.js$/,
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    }],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
    sourceMapFilename: '[name].map',
    path: path.resolve(PROJECT_ROOT, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_ROOT, 'src/client/assets/index.html'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    /* eslint-disable camelcase */
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    /* eslint-enable camelcase */
  ],
};
