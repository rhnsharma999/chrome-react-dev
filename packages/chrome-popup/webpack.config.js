"use strict"
const baseConfig = require("chrome-build/webpack.common.config")
const htmlPlugin = require("html-webpack-plugin")
const path = require("path")

const sourceRoot = path.resolve(__dirname, "src")

module.exports = Object.assign(baseConfig, {
  entry: {
    popup: path.resolve(sourceRoot, "index.tsx"),
  },
  plugins: [new htmlPlugin({ template: path.resolve(sourceRoot, "index.html") })].concat(
    baseConfig.plugins || []
  ),
})
