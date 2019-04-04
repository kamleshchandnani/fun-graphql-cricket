const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
/* eslint-disable import/no-unresolved */
const assets = require('./build/client/assets.json');
/* eslint-enable import/no-unresolved */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'development' : 'production',

  entry: './src/server.js',

  target: 'node',

  externals: [
    nodeExternals(),
  ],

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build/server'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        use: [],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __STAGE__: JSON.stringify(process.env.STAGE),
      __ASSETS__: JSON.stringify(assets),
    }),
  ],
};
