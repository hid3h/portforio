require('dotenv').config()
const contentful = require('contentful')

const title = '踊りながらWebサービスを個人開発している人のブログ'
const description = '作ったWebサービスの記事や普通のブログ記事など'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      // { hid: 'og:type', property: 'og:type', content: this.meta.type },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      // { hid: 'og:url', property: 'og:url', content: this.meta.url },
      // { hid: 'og:image', property: 'og:image', content: this.meta.image },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
    ],
    script: [
      { src: 'https://platform.twitter.com/widgets.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true, // $mdでmarkdownをhtmlにレンダリングできるようにする
    html: true // htmlを使用できるようにする
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  env: {
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    ctfArchivesTypeId: process.env.CTF_ARCHIVES_TYPE_ID
  },

  generate: {
    routes: function () {
      return contentful
        .createClient({
          space: process.env.CTF_SPACE_ID,
          accessToken: process.env.CTF_CDA_ACCESS_TOKEN
        }).getEntries()
        .then((res) => {
          return res.items.map((archive) => {
            return {
              route: '/archives/' + archive.fields.slug,
              payload: archive
            }
          })
        })
    }
  },
}
