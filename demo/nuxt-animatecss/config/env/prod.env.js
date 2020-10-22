'use strict'
module.exports = {
  prodProd: { // 测试同学打包
    NODEENV: 'prodProd',
    BASE_URL: '/api/pc', // 服务器地址
  },

  production: {
    NODEENV: 'production',
    BASE_URL: '/api/pc', // 正式服务器地址
  },
}