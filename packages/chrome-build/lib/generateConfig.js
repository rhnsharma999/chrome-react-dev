const path = require("path")

const baseDir = path.resolve(__dirname, "..", "..")

const generateManifestObject = () => {
  const iconConfigPath = path.resolve(baseDir, "chrome-assets/icons/icons.json")
  const icons = require(iconConfigPath)

  const { getManifestBase } = require(path.resolve(baseDir, "chrome-config/src/index.js"))
  const manifestConfig = getManifestBase()

  return Object.assign({}, manifestConfig, { icons: { ...icons } })
}

module.exports = generateManifestObject
