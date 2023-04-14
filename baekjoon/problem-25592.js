let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let index = 0
while (n >= 0) {
  index++
  n -= index
}
console.log(index % 2 === 1 ? Math.abs(n) : 0)
