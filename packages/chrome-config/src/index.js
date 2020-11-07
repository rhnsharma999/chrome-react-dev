const manifestConfig = require("./config/manifest.json")

const getManifest = () => JSON.parse(manifestConfig)

module.exports.getManifest = getManifest
