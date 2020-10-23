const fs = require('fs')
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

console.log('copyres.js')

//文件遍历方法
function fileDisplay (filePath, toPath) {
  fs.readdir(filePath, function(err, files) {
    if (err) {
      console.warn('fileDisplay error=>', err)
    } else {
      // 遍历读取到的文件列表
      files.forEach( function(filename) {
        // 获取当前文件的绝对路径
        const filedir = join(filePath, filename)
        const toFiledir = join(toPath, filename)
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function(eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            var isFile = stats.isFile();
            var isDir = stats.isDirectory();
            if (isFile) { 
              console.log('isFile =>', filedir)
              const pageCode = fs.readFileSync(filedir, 'utf8')
              const lastCode = pageCode.replace(/from '~/gm, "from '@")
              // console.log(typeof pageCode)
              // console.log('lastCode=', lastCode)
              console.log('toFiledir=>', toFiledir)
              fs.writeFileSync(toFiledir, lastCode, 'utf8')
            } else if (isDir) {
              console.log('isDir =>', filedir)
              fileDisplay(filedir)
            }
          }
        })
      })
    }
  })
}

console.log('process.argv=>', process.argv)
const getArguments = process.argv.splice(2) || []
const arg = String(getArguments)


const fromAssets = join(__dirname, 'assets')
const fromComponent = join(__dirname, 'component')
const fromMixins = join(__dirname, 'mixins')
const fromPage = join(__dirname, 'pages')
const fromMixinOfAnimateCss = join(__dirname, '../../index.js')

const nuxtName = 'nuxt-animatecss'
const vueName = 'vue2-animatecss/src'

const goBack = join(__dirname, '../')
let targetAssets = goBack
let targetComponent = goBack
let targetMixins = goBack
let targetPage = goBack
let targetMixinOfAnimateCss = goBack

if (arg === 'nuxt') {
  targetAssets += nuxtName + '/assets'
  targetComponent += nuxtName + '/components'
  targetMixins += nuxtName + '/utils/mixins'
  targetPage += nuxtName + '/pages'

  targetMixinOfAnimateCss += nuxtName + '/utils/mixins/animate-css.js'
} else {
  targetAssets += vueName + '/assets'
  targetComponent += vueName + '/components'
  targetMixins += vueName + '/utils/mixins'
  targetPage += vueName + '/pages'

  targetMixinOfAnimateCss += vueName + '/utils/mixins/animate-css.js'
}

const delArrayPath = [targetAssets, targetComponent, targetMixins, targetPage]
delArrayPath.forEach(e => {
  console.log('delete path =>', e)
  removeSync(e)
})

let copyArrayPath = []
if (arg === 'nuxt') {
  copyArrayPath = [
    {from: fromAssets, to: targetAssets},
    {from: fromComponent, to: targetComponent},
    {from: fromMixins, to: targetMixins},
    {from: fromPage, to: targetPage},
    {from: fromMixinOfAnimateCss, to: targetMixinOfAnimateCss},
  ]
} else {
  copyArrayPath = [
    {from: fromAssets, to: targetAssets},
    {from: fromComponent, to: targetComponent},
    {from: fromMixins, to: targetMixins},
    // {from: fromPage, to: targetPage},
    {from: fromMixinOfAnimateCss, to: targetMixinOfAnimateCss},
  ]
}

copyArrayPath.forEach(e => {
  const from = e.from
  const to = e.to
  console.log('copy path =>', from, ' || to=>', to)
  copySync(from, to)
})


if (arg === 'vue') {
  fs.mkdirSync(targetPage)
  fileDisplay(fromPage, targetPage)
}