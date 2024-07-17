const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: `./src/index.ts`,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@step-js-core': path.resolve(__dirname, './src/step-js/core'),
      '@step-js-html-5': path.resolve(__dirname, './src/step-js/html-5'),
      '@step-js-bootstrap': path.resolve(__dirname, './src/step-js/bootstrap'),
      '@step-js-custom': path.resolve(__dirname, './src/step-js/custom')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlPlugin({
      title: `${process.env.APPLICATION_FOLDER}`,
      title: 'step-js',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      inject: 'body'
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
