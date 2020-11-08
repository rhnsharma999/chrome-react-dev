const base = require("chrome-build/jest.common.config")
const path = require("path")

const projectRoot = path.resolve(__dirname, "..", "..")
module.exports = Object.assign({}, base(projectRoot))
