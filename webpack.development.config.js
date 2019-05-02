const webpack = require('webpack')
const path = require('path')
const childProcess = require('child_process')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const FixDefaultImportPlugin = require('webpack-fix-default-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      './preview/preview.tsx',
    ]
  },
  output: {
    filename: 'bundle.js',
    pathinfo: false,
    path: path.join(__dirname, '/dist')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'eval',

  devServer: {
    port: 3000
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    }),
    new FixDefaultImportPlugin(),
    new HtmlWebpackPlugin({
      template: 'preview/index.html',
    }),
  ]
}
