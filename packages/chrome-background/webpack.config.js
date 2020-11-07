"use strict"

const path = require("path")
const baseConfig = require("chrome-build/webpack.common.config")
const packageRoot = path.resolve(__dirname)

module.exports = Object.assign(baseConfig, {
  entry: {
    background: path.resolve(packageRoot, "src", "index.ts"),
  },
})
