"use strict";

const path = require("path");
const monoRoot = path.resolve(__dirname, "../../packages");

module.exports = {
  output: {
    path: path.resolve(monoRoot, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "chrome-background": path.resolve(monoRoot, "chrome-background", "src"),
      "chrome-popup": path.resolve(monoRoot, "chrome-popup", "src"),
    },
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: "/node_modules/" },
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
};
