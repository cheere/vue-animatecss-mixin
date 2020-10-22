'use strict'
const {merge} = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  development: {
    NODEENV: 'development',
    BASE_URL: 'http://0.0.0.0',
  },
  
  devprod: {
    NODEENV: 'devProd',
    BASE_URL: '/api/pc', // 服务器地址
  },
})
