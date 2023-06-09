let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
if(parseInt(input[0])*1+parseInt(input[1])*2+parseInt(input[2])*3>=10) {
  return console.log('happy')
}
console.log('sad')