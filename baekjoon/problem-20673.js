let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let k = Number(input[1])
if (n <= 50 && k <= 10) {
  return console.log('White')
}
if (k > 30) {
  return console.log('Red')
}
console.log('Yellow')