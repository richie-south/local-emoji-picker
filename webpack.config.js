const webpack = require('webpack')
const path = require('path')
const childProcess = require('child_process')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: {
    client: './src/index.tsx'
  },
  output: {
    filename: 'emoji-list.[hash].js',
    path: path.join(__dirname, '/dist')
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
        ]
      },
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    }),
    /* new BundleAnalyzerPlugin() */
  ]
}
