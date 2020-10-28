/**
 * get package -> version
 * to
 * index.js(vue-animagecss-mixin -> animate-css.js)
 */
const {version} = require('./package.json')
const fs = require('fs')
const readline = require('readline');
const { join } = require('path')

const jsPath = join(__dirname, 'index.js')
const newVersion = ' * vue-animatecss-mixin - ' + version

function read_line(path, callback) {
  var fRead = fs.createReadStream(path);
    var objReadline = readline.createInterface({
        input: fRead
    });
    var arr = new Array()
    objReadline.on('line', function (line) {
        // console.log(line)
        arr.push(line)
    });
    objReadline.on('close',function () {
        callback(arr)
    });
}

const pageCode = fs.readFileSync(jsPath, 'utf8')
// console.log('pageCode\n\n', pageCode, '\n\n')
read_line(jsPath, function (data) {
  if (data && Array.isArray(data) && data.length > 1) {
    const oldVersion = data[1]
    const lastCode = pageCode.replace(oldVersion, newVersion)
    fs.writeFileSync(jsPath, lastCode, 'utf8')
  }
})