const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLInlineCSSPlugin = require("html-inline-css-webpack-plugin").default;
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: `./src/index.ts`,
  mode: 'production',
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
        loader: "file-loader",
          options: {
             name: "assets/images/[name].[ext]"
          }
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
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@step-js-core': path.resolve(__dirname, './step-js-core'),
      '@step-js-html-5': path.resolve(__dirname, './src/step-js/html-5'),
      '@step-js-bootstrap': path.resolve(__dirname, './src/step-js/bootstrap'),
      '@step-js-custom': path.resolve(__dirname, './src/step-js/custom')
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlInlineScriptPlugin(),
    new HtmlPlugin({
      title: 'step-js',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      inject: 'body'
    }),
    new HTMLInlineCSSPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: './',
    clean: true,
  },
};
