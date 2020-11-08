const path = require("path")

module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "\\.(ts|tsx)$": `ts-jest`,
  },
  setupFiles: ["raf/polyfill"],
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
}
