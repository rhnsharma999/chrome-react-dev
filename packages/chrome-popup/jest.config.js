const path = require("path")

const base = require("chrome-build/jest.common.config")
const setupFile = path.resolve(__dirname, "src/setup", "setupTests.ts")

module.exports = Object.assign(base, {
  setupFilesAfterEnv: [setupFile],
  snapshotSerializers: ["enzyme-to-json/serializer"],
})
