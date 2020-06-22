const compose = plugins => ({
  webpack(config, options) {
    return plugins.reduce((config, plugin) => {
      if (plugin instanceof Array) {
        const [_plugin, ...args] = plugin
        plugin = _plugin(...args)
      }
      if (plugin instanceof Function) {
        plugin = plugin()
      }
      if (plugin && plugin.webpack instanceof Function) {
        return plugin.webpack(config, options)
      }
      return config
    }, config)
  },

  webpackDevMiddleware(config) {
    return plugins.reduce((config, plugin) => {
      if (plugin instanceof Array) {
        const [_plugin, ...args] = plugin
        plugin = _plugin(...args)
      }
      if (plugin instanceof Function) {
        plugin = plugin()
      }
      if (plugin && plugin.webpackDevMiddleware instanceof Function) {
        return plugin.webpackDevMiddleware(config)
      }
      return config
    }, config)
  },
})

const withBundleAnalyzer = require('@next/bundle-analyzer')

module.exports = compose([
  [
    withBundleAnalyzer,
    {
      enabled: process.env.ANALYZE === 'true',
    },
  ],
])

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log('exportmapp2')
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/archives': { page: '/archives' },
      '/archives/test': { page: '/archives/test' },
      // '/archives/learn-nextjs': { page: '/archives', query: { title: 'learn-nextjs' } },
      // '/archives/deploy-nextjs': { page: '/archives', query: { title: 'deploy-nextjs' } },
    }
  },
}