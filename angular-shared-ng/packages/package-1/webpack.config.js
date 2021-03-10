const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = webpack.container;

const path = require("path");

const SRC_DIR = path.resolve(__dirname, "./src");
const ENTRY_POINT = path.resolve(SRC_DIR, "./index.js");
const DIST_DIR = path.resolve(__dirname, "../../dist/package1");
const APP_TEMPLATE = path.resolve(__dirname, "./index.html");

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: DIST_DIR,
    filename: "js/bundle.[hash].js",
    publicPath: '/package1/'
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 2001,
    historyApiFallback: true,
    hot: true,
    open: false,
    clientLogLevel: "debug",
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "package1",
      library: {type: "var", name: "package1"},
      filename: "remoteEntry.js",
      exposes: {
        "./package1": "./src/App",
      },
      shared: {},
    }),
    new HtmlWebpackPlugin({
      template: APP_TEMPLATE,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
  ],
};
