const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = webpack.container;
const packageJsonDeps = require("./package.json").dependencies;

const path = require("path");

const SRC_DIR = path.resolve(__dirname, "./src");
const ENTRY_POINT = path.resolve(SRC_DIR, "./index.js");
const DIST_DIR = path.resolve(__dirname, "../../dist/admin_app");
// const APP_TEMPLATE = path.resolve(__dirname, "./index.html");

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: DIST_DIR,
    filename: "js/bundle.[hash].js",
    publicPath: "/admin_app/"
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 2002,
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
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "admin_app",
      // library: { type: "var", name: "admin_app" },
      filename: "remoteEntry.js",
      exposes: {
        "./admin-app-routes": "./src/routes.js",
        "./UserPermissionsService": "./src/user-permissions/user-permissions.service.js"
      },
      remotes: {
        ng: "ng@/ng/remoteEntry.js",
      },
      shared: {
        ...packageJsonDeps,
        angular: {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps.angular,
        },
        // "react-dom": { singleton: true, eager: true, requiredVersion: packageJsonDeps["react-dom"] },
        react: { singleton: true, eager: true, requiredVersion: packageJsonDeps.react, },
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
