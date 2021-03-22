const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = webpack.container;
const packageJsonDeps = require("./package.json").dependencies;

const path = require("path");

const SRC_DIR = path.resolve(__dirname, "./src");
const ENTRY_POINT = path.resolve(SRC_DIR, "./index.js");
const DIST_DIR = path.resolve(__dirname, "../../dist/ng");
// const APP_TEMPLATE = path.resolve(__dirname, "./index.html");

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: DIST_DIR,
    filename: "js/bundle.[hash].js",
    publicPath: "/ng/",
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 2001,
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
      name: "ng",
      library: { type: "var", name: "ng" },
      filename: "remoteEntry.js",
      exposes: {
        "./ng": "./src/ng",
        "./ng-component": "./src/ng-component",
        "./ng-react-component": "./src/ng-react-component",
        "./ng-service": "./src/ng-service",
      },
      shared: {
        ...packageJsonDeps,
        angular: {
          singleton: true,
          requiredVersion: packageJsonDeps.angular,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: packageJsonDeps["react-dom"]
        },
        react: {
          singleton: true,
          requiredVersion: packageJsonDeps.react,
        },
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: APP_TEMPLATE,
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
  ],
};
