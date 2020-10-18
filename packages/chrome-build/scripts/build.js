"use strict"
const gulp = require("gulp")
const path = require("path")
const webpack = require("webpack")
const webpackErrorOutput = require("../lib/webpackErrorOutput")

const monoRoot = path.resolve(__dirname, "..", "..")

gulp.task("build:popup", (callback) => {
  const config = require(path.resolve(monoRoot, "chrome-popup", "webpack.config.js"))

  webpack(config, (err, stats) => {
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})
