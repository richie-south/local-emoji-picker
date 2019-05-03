const webpack = require('webpack')
const path = require('path')
const childProcess = require('child_process')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const FixDefaultImportPlugin = require('webpack-fix-default-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: [
      './preview/preview.tsx',
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    pathinfo: false,
    chunkFilename: 'chunk-[name].[contenthash].js',
    filename: 'bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

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
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
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
