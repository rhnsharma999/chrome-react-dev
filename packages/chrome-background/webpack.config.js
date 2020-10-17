"use strict";

const path = require("path");
const baseConfig = require("chrome-build/webpack.common.config");

module.exports = Object.assign(baseConfig, {
  entry: {
    background: "./src/index.ts",
  },
});
