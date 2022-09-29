const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const { NODE_ENV = "production" } = process.env;
module.exports = {
  entry: "./src/server.ts",
  mode: NODE_ENV,
  target: "node",
  watch: NODE_ENV === "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".js"],
  },
//   plugins: [
//     new WebpackShellPlugin({
//       onBuildEnd: ['yarn run:dev']
//     })
//   ]

  plugins: [
    new WebpackShellPluginNext({
    //   onBuildStart:{
    //     scripts: ['echo "===> Starting packing with WEBPACK 5"'],
    //     blocking: true,
    //     parallel: false
    //   },
      onBuildEnd:{
        scripts: ['yarn run:dev'],
        blocking: false,
        parallel: true
      }
    })
  ]
};
