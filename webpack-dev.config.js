const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: `./src/index.ts`,
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@step-js-bootstrap': path.resolve(__dirname, './src/step-js-bootstrap')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ''
  },
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
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.join(__dirname, 'build/images'),
        },
      ]
    }),
    new MiniCssExtractPlugin(),
    new HtmlPlugin({
      title: 'step-js-example',
      template: `src/index.html`,
      favicon: `src/favicon.ico`,
    }),
  ],
  devServer: {
    compress: true,
    port: 8000,
    allowedHosts: 'all',
    historyApiFallback:{
      index:'index.html'
    },
    static: { 
      directory: path.resolve(__dirname, './'), 
      publicPath: '/'
    }
  },
};
