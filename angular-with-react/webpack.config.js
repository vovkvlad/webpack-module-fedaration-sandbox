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
    filename: "js/bundle.[hash].js",
    publicPath: '/'
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 2000,
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
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host-app",
      remotes: {
        package1: "package1@//localhost:2001/remoteEntry.js",
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
        jquery: {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps.jquery,
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
