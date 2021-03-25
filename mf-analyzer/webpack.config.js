const path = require('path');
const fs = require('fs');

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DashboardPlugin = require("@module-federation/dashboard-plugin");

const packageJsonDeps = require("./package.json").dependencies;

const {ModuleFederationPlugin} = webpack.container;

const SRC_DIR = path.resolve(__dirname, "./src");
const ENTRY_POINT = path.resolve(SRC_DIR, "./index.js");
const DIST_DIR = path.resolve(__dirname, "./dist");
const APP_TEMPLATE = path.resolve(__dirname, "./index.html");

// ideally should be moved out of this file
function getAllPackagesDistExcludeRules() {
  const packagesPath = path.join(__dirname, 'packages');
  const allDirectories = fs.readdirSync(packagesPath);

  const directoryPatternsToExclude = [];

  allDirectories.forEach(packageName => {
    // ideally we can use directory name in case it is the same as package.json's name prop, which is not my case, sadly
    const packageJson = JSON.parse(fs.readFileSync(path.join(packagesPath, packageName, 'package.json'), 'utf8'));

    directoryPatternsToExclude.push(`!${packageJson.name}`);
    directoryPatternsToExclude.push(`!${packageJson.name}/**/*`);
  });

  return directoryPatternsToExclude;
}

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: DIST_DIR,
    filename: "js/bundle.[hash].js",
    publicPath: '/',
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 2000,
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host-app",
      remotes: {
        ng: "ng@/ng/remoteEntry.js",
        'admin_app': 'admin_app@/admin_app/remoteEntry.js',
        'react_app': 'react_app@/react_app/remoteEntry.js'
      },
      shared: {
        ...packageJsonDeps,
        "@uirouter/react-hybrid": {
          singleton: true,
          eager: true,
          requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
        },
        "@uirouter/react": {
          singleton: true,
          eager: true,
          // requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
        },
        "@uirouter/angularjs": {
          singleton: true,
          eager: true,
          // requiredVersion: packageJsonDeps["@uirouter/react-hybrid"],
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
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ["**/*", "**/*.js.map", ...getAllPackagesDistExcludeRules()]
    }),
    new DashboardPlugin({
      dashboardURL: "http://localhost:3000/api/update",
      metadata: {
        name: 'AAAAAAAA',
        prop: 'test-prop',
      }
    }),
  ],
};
