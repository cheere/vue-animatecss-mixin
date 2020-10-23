const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

console.log('copy nuxt-dist to docs')

const distPath = join(__dirname, '../dist')
const targetPath = join(__dirname, '../../../docs/nuxt')

removeSync(targetPath)
copySync(distPath, targetPath)