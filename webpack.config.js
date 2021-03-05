const webpack = require('webpack')
const path = require('path')
const childProcess = require('child_process')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: {
    picker: path.resolve(__dirname, 'src/components/picker/picker.tsx'),
    frequentlyUsed: path.resolve(__dirname, 'src/lib/frequently-used.ts'),
    searchEmojis: path.resolve(__dirname, 'src/lib/search.ts'),
    searchBar: path.resolve(__dirname, 'src/components/search-bar/search-bar.tsx'),
    categorySelector: path.resolve(__dirname, 'src/components/category-selector/category-selector.tsx'),
    emojiList: path.resolve(__dirname, 'src/lib/emoji-list.json')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  externals: [nodeExternals({
    whitelist: ['store']
  })],

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
    /* new BundleAnalyzerPlugin() */
  ]
}
