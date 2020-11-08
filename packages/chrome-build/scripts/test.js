/**
 * There is an issue with gulp-jest and it doesn't work with jest 25 and above.
 * https://github.com/aarontrank/gulp-jest/issues/65
 *
 * So have to resort to package.json for tests
 */

//const jest = require("gulp-jest").default
// const GulpClient = require("gulp")
// const { task, src, pipe } = require("gulp")
// const path = require("path")

// const monoRoot = path.resolve(__dirname, "..", "..")
// task("test:background", () =>
//   src(`${monoRoot}/chrome-background/**`).pipe(
//     jest({
//       // preprocessorIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
//       // automock: false,
//     })
//   )
// )
