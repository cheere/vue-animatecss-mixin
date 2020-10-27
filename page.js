const fs = require('fs')
const { join } = require('path')
const { removeSync } = require('fs-extra')

// console.log('process.argv=>', process.argv)
const getArguments = process.argv.splice(2) || []
const arg = String(getArguments)
let hrefFavicon = '<link rel="icon" href="/vue-animatecss-mixin/favicon.ico">'
let hrefCss = '<link rel="stylesheet" type="text/css" href="/vue-animatecss-mixin/main.css" />'
let hrefVue = '<div><a href="/vue-animatecss-mixin/vue" rel="noopener noopener">Vue demo</a></div>'
let hrefNuxt = '<div><a href="/vue-animatecss-mixin/nuxt" rel="noopener noopener">Nuxt demo</a></div>'

if (arg === 'dev') {
  hrefFavicon = '<link rel="icon" href="/favicon.ico">'
  hrefCss = '<link rel="stylesheet" type="text/css" href="/main.css" />'
  hrefVue = '<div><a href="/vue" rel="noopener noopener">Vue demo</a></div>'
  hrefNuxt = '<div><a href="/nuxt" rel="noopener noopener">Nuxt demo</a></div>'
}

const tempHtml = join(__dirname, 'index.html')
const docsHtml = join(__dirname, '/docs/index.html')

removeSync(docsHtml)


const pageCode = fs.readFileSync(tempHtml, 'utf8')
lastCode = pageCode.replace(/tempFavicon/gm, hrefFavicon)
lastCode = lastCode.replace(/tempCssCode/gm, hrefCss)
lastCode = lastCode.replace(/tempVueCode/gm, hrefVue)
lastCode = lastCode.replace(/tempNuxtCode/gm, hrefNuxt)

fs.writeFileSync(docsHtml, lastCode, 'utf8')