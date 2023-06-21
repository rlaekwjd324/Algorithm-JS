let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = parseInt(input[0].split(' ')[0])
let b = parseInt(input[0].split(' ')[1])
let c = parseInt(input[1])
b += c
if (b >= 60) {
  a += parseInt(b / 60)
  b = b % 60
}
if (a >= 24) {
  a = a % 24
}
console.log(a + ' ' + b)
