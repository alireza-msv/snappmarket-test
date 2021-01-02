/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WebpackBar = require('webpackbar');
const DotenvWebpackPlugin = require('dotenv-webpack');

const PORT = process.env.port || 3000;
const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&timeout=30000&ansiColors=&overlayStyles=&name=client',
      path.resolve(__dirname, 'src/index.tsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: `bundle-[${IS_PROD ? 'contentHash' : 'hash'}].js`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: path.resolve(__dirname, 'src'),
        use: 'source-map-loader',
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(svg|ttf|woff2?|eot)(\?.*)?$/i,
        use: {
          loader: IS_PROD ? 'file-loader' : 'url-loader',
          options: {
            outputPath: 'assets/images',
            publicPath: './assets/images/',
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif)(\?.*)?$/i,
        use: {
          loader: IS_PROD ? 'file-loader' : 'url-loader',
          options: {
            outputPath: 'assets/images',
            publicPath: './assets/images/',
            name: '[name]-[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: ([
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
      minify: false,
    }),
    new DotenvWebpackPlugin(),
  ]),
  optimization: {
    minimize: IS_PROD,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetPlugin({}),
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  stats: { colors: true },
  devtool: IS_PROD ? false : 'source-map',
  devServer: {
    port: process.env.PORT || 3000,
    host: 'localhost',
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    open: false,
    openPage: `http://localhost:${PORT}`,
  },
};
