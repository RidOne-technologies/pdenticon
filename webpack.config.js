var path = require('path')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pdenticon.js',
    library: 'pdenticon',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
  ],

  optimization: {
    minimizer: [new UglifyJsPlugin({
        uglifyOptions: {
            output: {
              comments: false,
            },
          },
    })],
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
},
}
