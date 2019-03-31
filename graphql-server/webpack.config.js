const path = require('path');
const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/index.js',

  target: 'node',

  // externals: [
  //   // nodeExternals(),
  //   'hiredis',
  // ],

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.mjs$/, type: 'javascript/auto', use: [] },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __STAGE__: JSON.stringify(process.env.STAGE),
    }),
  ],
};
