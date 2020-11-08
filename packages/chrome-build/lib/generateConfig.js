const path = require("path")
const webpackErrorOutput = require("./webpackErrorOutput")
const baseDir = path.resolve(__dirname, "..", "..")

const generateIconsObject = () => {
  const iconConfigPath = path.resolve(baseDir, "chrome-assets/icons/icons.json")
  let icons = require(iconConfigPath)
  // do not write icons if any icon path is null, chrome throws an error otherwise
  if (Object.keys(icons).some((key) => !icons[key])) {
    const warningObj = {
      message: "Atleast one icon file path is null",
    }

    webpackErrorOutput([], [warningObj])
    icons = {}
  }
  return icons
}

const generateBaseManifest = () => {
  const { getManifestBase } = require(path.resolve(baseDir, "chrome-config/src/index.js"))
  return getManifestBase()
}

const generateManifestObject = () => {
  const icons = generateIconsObject()
  const baseManifest = generateBaseManifest()

  return Object.assign({}, baseManifest, { icons: { ...icons } })
}

module.exports = generateManifestObject
