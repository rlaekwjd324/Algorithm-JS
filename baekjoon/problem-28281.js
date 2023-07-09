let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let x = Number(input[0].split(' ')[1])
let values = input[1].split(' ').map(function (v) { return Number(v)})
let min = 2000000000
let sum = 0
for (let i = 0; i < n - 1; i++) {
  sum = values[i] * x + values[i + 1] * x
  min = Math.min(min, sum)
}
console.log(min)
