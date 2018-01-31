const path = require('path');

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  context: path.join(__dirname, './'),
  
  entry: {
    main: "./client/main.jsx"
  },
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "less-loader" // compiles Less to CSS 
            }]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /public/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-1', 'stage-2']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /public/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-1', 'stage-2']
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "[name].css", allChunks: true})
  ]
};