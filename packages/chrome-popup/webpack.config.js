"use strict"
const baseConfig = require("chrome-build/webpack.common.config")
const path = require("path")

const packageRoot = path.resolve(__dirname)

module.exports = Object.assign(baseConfig, {
  entry: {
    popup: path.resolve(packageRoot, "src", "index.tsx"),
  },
})
