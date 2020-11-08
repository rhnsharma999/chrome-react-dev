"use strict"

// modules
const del = require("del")
const fs = require("fs")
const { task, series, parallel } = require("gulp")
const path = require("path")
const webpack = require("webpack")
const webpackErrorOutput = require("../lib/webpackErrorOutput")
const generateConfig = require("../lib/generateConfig")
const generateManifestObject = require("../lib/generateConfig")

// custom path resolves
const monoRoot = path.resolve(__dirname, "..", "..")
const projectRoot = path.resolve(monoRoot, "..")

// constants for tasks (might move them later)
const BUILD = "build"
const BUILD_BACKGROUND = "build:background"
const BUILD_POPUP = "build:popup"
const BUILD_MANIFEST = "build:manifest"
const BUILD_CLEAN = "build:clean"

// actual gulp tasks here. There is no logical order. Might clean up later
task(BUILD_POPUP, (callback) => {
  const config = require(path.resolve(monoRoot, "chrome-popup", "webpack.config.js"))

  webpack(config, (err, stats) => {
    if (err) {
      console.error(err)
      callback()
      return
    }
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})

task(BUILD_BACKGROUND, (callback) => {
  const config = require(path.resolve(monoRoot, "chrome-background", "webpack.config.js"))

  webpack(config, (err, stats) => {
    if (err) {
      console.error(err)
      callback()
      return
    }
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})

task(BUILD_MANIFEST, (callback) => {
  const outputFilePath = path.resolve(projectRoot, "dist", "manifest.json")
  fs.writeFile(outputFilePath, JSON.stringify(generateManifestObject(), null, 5), callback)
})

task(BUILD_CLEAN, () => del([`${projectRoot}/dist/**`]))

task(BUILD, series(BUILD_CLEAN, parallel(BUILD_MANIFEST, BUILD_BACKGROUND, BUILD_POPUP)))
