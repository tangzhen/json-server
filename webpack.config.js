const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/front/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(t|j)s?$/, exclude: [/node_modules/], loader: ['awesome-typescript-loader?module=es6'] },
      { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      favicon: 'src/front/favicon.ico',
      template: 'src/front/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
