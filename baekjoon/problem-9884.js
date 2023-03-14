let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = parseInt(input[0].split(' ')[0])
let b = parseInt(input[0].split(' ')[1])
while(a !== b) {
  let temp = Math.max(a, b) - Math.min(a, b)
  b = Math.min(a, b)
  a = temp
}
console.log(a)
