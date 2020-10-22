/**
 * replace file
 * ----------------------
 * env：development 、 production
 */
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

/**
 * @name animate-css.js
 */
const AnimateCssFrom = '../../../index.js'

/**
 * @name target file
 */
const AnimateCssPath = '../utils/mixins/animate-css.js'

/**
 * copy npm-package to this.nuxt/utils/mixins/animate-css.js
 * @param {string} NODEENV env
 * @param {*} generator ..
 */
function copyACFile(NODEENV = 'dev', generator = null) {
  let rootPath = ''
  let acPath = ''
  if (generator) {
    // npm run generate
    const publicDir = generator.nuxt.options.generate.dir
    acPath = join(__dirname, AnimateCssFrom)

    rootPath = join(publicDir, AnimateCssPath)
    console.log('删除(rm)', rootPath)
    removeSync(rootPath)
  } else {
    // npm run devprod/prodgen
    acPath = join(__dirname, AnimateCssFrom)

    rootPath = join(__dirname, AnimateCssPath)
    console.log('删除(rm)', rootPath)
    removeSync(rootPath)
  }
  
  if (NODEENV === 'production') {
    console.log('拷贝(copy)', acPath)
    copySync(acPath, rootPath)
  } else {
    console.log('拷贝(copy)', acPath, ' to=>', rootPath)
    copySync(acPath, rootPath)
  }
}

module.exports = {copyACFile}