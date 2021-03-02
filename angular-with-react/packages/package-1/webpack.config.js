const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const packageJsonDeps = require("./package.json").dependencies;

const {ModuleFederationPlugin} = webpack.container;

const path = require("path");

const SRC_DIR = path.resolve(__dirname, "./src");
const ENTRY_POINT = path.resolve(SRC_DIR, "./index.js");
const DIST_DIR = path.resolve(__dirname, "./dist");
const APP_TEMPLATE = path.resolve(__dirname, "./index.html");

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: DIST_DIR,
    filename: "js/[name].bundle.[hash].js",
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
      shared: {
        // ...packageJsonDeps,
        "@uirouter/react-hybrid": {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
        },
        angular: {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps.angular,
        },
        react: {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps["react-dom"],
        },
      },
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
