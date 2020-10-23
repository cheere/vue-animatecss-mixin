const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

const {configVersion, configCurrentTime, configBanner} = require('./config/util.config')
const GLOB_ENV = require('./config/env')
const {copyACFile} = require('./config/copy-animate')

const Env = process.env || {NODE_ENV: 'production'}
const EnvDevelopment = Env.NODE_ENV || 'production'

const NUXT_DEV_PROD = EnvDevelopment === 'development' ? 'development'
                       : (process.env.NUXT_DEV_PROD || 'production')

// windows-os - xx.replace
const deploy = NUXT_DEV_PROD.replace(/\ +/g, '') // 去掉空格方法
const Config = GLOB_ENV[deploy]

// 图片资源 - 添加时间戳
const DateTime = new Date().getTime()
const BuildFilenames = '[contenthash:7]_' + DateTime + '.[ext]'

const IsPage = deploy === 'page'
const isProd = deploy === "production";
const RouterBase =
IsPage 
? {
    router: {
      base: '/vue-animatecss-mixin/nuxt/'
    }
  }
: ( isProd 
  ? {
    router: {
      base: '/nuxt/'
    }
  }
  : {} )

export default {

  // https://www.nuxtjs.cn/faq/github-pages
  ...RouterBase,

  // https://zh.nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/#how-environment-variables-work
  env: {
    RXBaseUrl: Config.BASE_URL || 'http://localhost:3000',
    RXNODEENV: Config.NODEENV,
    RXVERSION: configVersion,
    RXUpdateTime: configCurrentTime,
  },

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // https://vue-meta.nuxtjs.org/api/#script
      // { src: '/utils/zhugeio.js', async: true, defer: true, once: false},
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    'animate.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    sourceMap: false,

    // https://zh.nuxtjs.org/api/configuration-build/#filenames
    filenames: { // css 和 js  img 打包时指定文件夹、文件名
      app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/' + BuildFilenames,
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/' + BuildFilenames,
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/' + BuildFilenames,
    },

    // only - server
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': configVersion
      }),
      new webpack.BannerPlugin(configBanner),
    ],

    // https://github.com/webpack-contrib/terser-webpack-plugin
    // only - client
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: {
            banner: () => {
              return configBanner;
            },
          },
        }),
      ],
    },
  },

  // https://zh.nuxtjs.org/guides/internals-glossary/internals-generator/#hooks
  hooks: {
    build: {
      before(nuxt, buildOptions) {
        console.log('run hooks-build-before build')
      }
    },
    generate: {
      before(generator) {
        console.log('run hooks-generate-before gen')
        copyACFile(Config.NODEENV, generator)
      },
    }
  }
}
