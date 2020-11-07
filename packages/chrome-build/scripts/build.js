"use strict"
const gulp = require("gulp")
const path = require("path")
const webpack = require("webpack")
const webpackErrorOutput = require("../lib/webpackErrorOutput")

const monoRoot = path.resolve(__dirname, "..", "..")

const BUILD = "build"
const BUILD_BACKGROUND = "build:background"
const BUILD_POPUP = "build:popup"

gulp.task(BUILD_POPUP, (callback) => {
  const config = require(path.resolve(monoRoot, "chrome-popup", "webpack.config.js"))

  webpack(config, (_err, stats) => {
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})

gulp.task(BUILD_BACKGROUND, (callback) => {
  const config = require(path.resolve(monoRoot, "chrome-background", "webpack.config.js"))

  webpack(config, (_err, stats) => {
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})

gulp.task(BUILD, gulp.parallel(BUILD_BACKGROUND, BUILD_POPUP))
