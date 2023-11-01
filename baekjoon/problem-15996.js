let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0].split(' ')[0])
let s = Number(input[0].split(' ')[1])
if(t<=16 && t>=12 && s===0) {
  return console.log('320')
}
console.log('280')