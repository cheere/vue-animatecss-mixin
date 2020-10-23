/**
 * 给打包添加 环境变量
 * npm run devprod/prodgen
 */
'use strict'
const { exec } = require('child_process')
const platform = require('os').platform()
const chalk = require('chalk')
const consola = require('consola')
// const { join } = require('path')
// const { copySync, removeSync } = require('fs-extra')

const getArguments = process.argv.splice(2) || []
console.log('getArguments=>', getArguments)

function findPlatform (
  winCall = () => {},
  otherCall = () => {}) {
  if (/^win/.test(platform)) {
    return winCall && winCall()
  }
  otherCall && otherCall()
}

const shellDeploy = getArguments[0]
const shellOther = getArguments.splice(1).join(' ')

let shellSet = 'set'

function runExec (runJs) {
  // console.log('执行命令: ', runJs)
  console.log('Execute the order: ', runJs)
  const build = exec(runJs, {windowsHide: false}, (err, stdout, stderr) => {
    if (err) {
      consola.error(err)
      return
    }
    const stdoutTip = chalk.blue('stdout')
    consola.info(`${stdoutTip}: ${stdout}`)
    console.log('')
    console.log(chalk.green('build finished'))
  });
  build.stdout.on('data', data => consola.wrapAll(chalk(data)))
}

function runShellJS () {
  console.log('')
  console.log('Custom script：')
  console.log(chalk.blue('Custom configuration environment=>'), chalk.green(shellDeploy))
  console.log(chalk.blue('Custom Nuxt generate=>'), chalk.green(shellOther))
  console.log('')
  // console.log(chalk.red('自定义脚本，打包细节不展示, 最多2分钟, 耐心等待...'))
  console.log(chalk.red('Custom script, package details do not show, up to 2 minutes, patience ...'))
  console.log('')

  // const distDict = join(__dirname, '../dist')
  // removeSync(distDict)
  // const staticDict = join(__dirname, '../static')
  // copySync(staticDict, distDict)

  const shell = ' NUXT_DEV_PROD=' + shellDeploy + ' && npm run ' + shellOther
  findPlatform(
    () => {
      // windows
      shellSet = 'set'
      runExec(shellSet + shell)
    },
    () => {
      // Mac & Linux
      shellSet = 'export'
      runExec(shellSet + shell)
    }
  )
}

runShellJS()