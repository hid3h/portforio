const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.ctfSpaceId,
  accessToken: process.env.ctfCdaAccessToken
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}

// export `createClient` to use it in page components
// export function createClient() {
//   return contentful.createClient(config)
// }
