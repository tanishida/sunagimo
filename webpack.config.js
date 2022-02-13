const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".html"],
    modules: [path.resolve("src"), "node_modules"],
  },
  entry: "./src/index.tsx",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: "3000"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module:{
    rules:[
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "src/index.html", hash: true})
  ]
}