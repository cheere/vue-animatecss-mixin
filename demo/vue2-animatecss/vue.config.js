const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: isProd ? "./" : "/",

  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: isProd ? false : true,

  // https://cli.vuejs.org/zh/config/#configurewebpack
  configureWebpack: {
    output: {
      filename: `js/[name].[hash].js`,
      chunkFilename: `js/[name].[hash].js`
    },
  },

  // https://cli.vuejs.org/zh/config/#devserver
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8081,
  }
}