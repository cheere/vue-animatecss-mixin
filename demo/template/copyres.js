
console.log('11111 copyres.js')

console.log('process.argv=>', process.argv)
const getArguments = process.argv.splice(2) || []
console.log('getArguments=>', getArguments)