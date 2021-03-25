const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = webpack.container;
const packageJsonDeps = require("./package.json").dependencies;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DashboardPlugin = require("@module-federation/dashboard-plugin");


const path = require("path");

const SRC_DIR = path.resolve(__dirname, "./src");
const ENTRY_POINT = path.resolve(SRC_DIR, "./index.js");
const DIST_DIR = path.resolve(__dirname, "../../dist/react_app");
// const APP_TEMPLATE = path.resolve(__dirname, "./index.html");

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: DIST_DIR,
    filename: "js/bundle.[hash].js",
    publicPath: "/react_app/",
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 2003,
    historyApiFallback: true,
    hot: true,
    open: false,
    clientLogLevel: "debug",
    writeToDisk: true,
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
      name: "react_app",
      // library: { type: "var", name: "admin_app" },
      filename: "remoteEntry.js",
      remotes: {
        'admin_app': 'admin_app@/admin_app/remoteEntry.js'
      },
      exposes: {
        "./react-page-routes": "./src/routes.js",
        "./ReactPageApp": "./src/App.js",
        "./SubPage1": "./src/components/sub-page-1/sub-page-1",
        "./SubPage2": "./src/components/sub-page-2/sub-page-2",
      },
      shared: {
        ...packageJsonDeps,
        "react-dom": {
          singleton: true,
          requiredVersion: packageJsonDeps["react-dom"]
        },
        react: {
          singleton: true,
          requiredVersion: packageJsonDeps.react,
        },
        "@uirouter/react-hybrid": {
          singleton: true,
          requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
        },
        "@uirouter/react": {
          singleton: true,
          // requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
        },
        "@uirouter/angularjs": {
          singleton: true,
          // requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new DashboardPlugin({
      dashboardURL: "http://localhost:3000/api/update",
      publishVersion: '1.0.0',
    }),
  ],
};
