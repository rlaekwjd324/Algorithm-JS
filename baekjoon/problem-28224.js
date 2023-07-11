let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let sum = 0
for (let i = 1; i <= t; i++) {
  sum += (parseInt(input[i]))
}
console.log(sum)
