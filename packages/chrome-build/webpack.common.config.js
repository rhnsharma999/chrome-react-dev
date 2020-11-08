"use strict"

const path = require("path")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const monoRoot = path.resolve(__dirname, "..", "..")
const packageRoot = __dirname

module.exports = {
  output: {
    path: path.resolve(monoRoot, "dist"),
    filename: "[name].js",
  },
  mode: process.env.NODE_ENV || "production",
  resolve: {
    alias: {
      "chrome-background": path.resolve(monoRoot, "packages/chrome-background", "src"),
      "chrome-popup": path.resolve(monoRoot, "packages/chrome-popup", "src"),
    },
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"], // this is required to allow class properties being declared
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: path.resolve(packageRoot, "tsconfig.common.json") },
    }),
  ],
}
