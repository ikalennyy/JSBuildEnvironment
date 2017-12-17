//used mostly for packing...aka minification and bundling

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',// for source mapping
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index') //index.js
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    //won't generate any file in dev..just simulating this. will run from memory.
    filename: 'bundle.js'
  },
  // hot reloading, linting, styles, etc...
  plugins: [],
  module: {
    // tells webpack how to handle packaging and minifying files of different types
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}//can intelligently load css files on top of my js files when in html
    ]
  }
}
