# Chrome development setup

This repo is intended to be a basic setup for chrome development. It uses the mono-repo layout and splits the background and the popup scripts separately.

## Building and Running

Ensure you have yarn installed.

| Command                | Description                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| `yarn bootstrap`       | Install all the dependencies. You need to run this atleast once before building                    |
| `yarn build`           | Build everything. This does minification by default and is intended for production builds          |
| `yarn build:dev`       | Build without minification and with source maps. Good if developing or deploying on a non prod env |
| `yarn test`            | test everything                                                                                    |
| `yarn test:background` | test background package                                                                            |
| `yarn test:popup`      | test popup                                                                                         |

## Project Layout

Project uses mono-repo like layout, logically separating code based on the function.
Project utilises [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for dependency management.

### Package Info

| Package           | Function                                                                                                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chrome-build      | Contains all the build logic. All the dev dependencies are added here and all the other packages depend on this build package. This improves reusability.                                            |
| chrome-popup      | Contains code for chrome's popup. This uses react and generates a index.html along with a javascript bundle. This is setup from scratch and uses typecscript, webpack for bundling and some loaders. |
| chrome-background | Contains code for chrome's background script. Uses typescript and is transpiled to ES5.                                                                                                              |
| chrome-assets     | This is intended for all the assets (mostly images) required by other packages. Also includes icons for chrome extension. Manifest is generated based on the included json file                      |
| chrome-config     | This is a config package which should hold all the related config such as API URLs, chrome manifest data etc. Should expose an interface to access these data                                        |

---

<p align="center">

![image not found](https://img.shields.io/badge/npm-v6.14.2-blue)
![image not found](https://img.shields.io/badge/webpack-v4.44.2-green)
![image not found](https://img.shields.io/badge/node-v14.3.1-yellow)
![image not found](https://img.shields.io/badge/yarn-v1.2-red)

</p>
