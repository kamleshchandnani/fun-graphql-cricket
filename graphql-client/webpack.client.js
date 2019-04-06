const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: './src/client.js',

  output: {
    path: path.resolve('./build/client'),
    publicPath: process.env.APP_PUBLIC_PATH,
    filename: isProd ? 'js/[name].[chunkhash:8].js' : 'js/[name].js',
    chunkFilename: isProd ? 'js/[name].[chunkhash:8].js' : 'js/[name].js',
  },

  module: {
    rules: isProd ? [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.mjs$/, type: 'javascript/auto', use: [] },
      { test: /\.css$/, use: ['raw-loader'] },
      { test: /\.(gif|png|jpe?g|svg|ico)$/i, use: [{ loader: 'file-loader', options: { name: 'images/[name].[hash:8].[ext]' } }] },
    ] : [
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }] },
      { test: /\.mjs$/, type: 'javascript/auto', use: [] },
      { test: /\.css$/, use: ['raw-loader'] },
      { test: /\.(gif|png|jpe?g|svg|ico)$/i, use: [{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } }] },
    ],
  },

  optimization: {
    moduleIds: isProd ? 'hashed' : 'named',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __STAGE__: JSON.stringify(process.env.STAGE),
    }),
    new CleanWebpackPlugin(),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve('./build/client'),
      prettyPrint: true,
    }),
  ].filter(Boolean),

  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',

  devServer: {
    contentBase: path.resolve('./build/client'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'errors-only',
    overlay: true,
  },
};
