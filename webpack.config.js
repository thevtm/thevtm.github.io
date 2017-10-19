const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, '/src/js');
const distPath = path.join(__dirname, '/dist');

module.exports = {

  context: srcPath,

  entry: {
    app: './index.js',
  },

  output: {
    path: distPath,
    filename: 'bundle.js',
  },

  target: "web",

  cache: true,

  devtool: '#cheap-module-eval-source-map',

  resolve: {
    modules: ["node_modules"],
  },

  module: {
    rules: [

      {
        test: /\.png/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "img/",
            },
          },
        ]
      },

    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]

};
