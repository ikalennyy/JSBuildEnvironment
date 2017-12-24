//used mostly for packing...aka minification and bundling

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'

export default {
  debug: true,
  devtool: 'source-map',// for source mapping
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index') //index.js
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),// write a physical file to this folder for prod
    publicPath: '/',
    //will create a file for prod.
    filename: 'bundle.js'
  },
  // hot reloading, linting, styles, etc...
  plugins: [
    //eliminate dupes in generating a bundle
    new webpack.optimize.DedupePlugin(),
    //minification
    new webpack.optimize.UglifyJSPlugin()
  ],
  module: {
    // tells webpack how to handle packaging and minifying files of different types
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}//can intelligently load css files on top of my js files when in html
    ]
  }
}
