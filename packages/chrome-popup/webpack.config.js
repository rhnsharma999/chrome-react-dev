"use strict";
const baseConfig = require("chrome-build/webpack.common.config");

module.exports = Object.assign(baseConfig, {
  entry: {
    popup: "./src/index.tsx",
  },
});

console.log(module.exports);
