let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let max = 0
for (let i = 1; i <= n; i++) {
  let array = input[i].split(' ').map(function (v) { return Number(v) })
  let score = array[0] > array[1] ? array[0] : array[1]
  array.splice(0, 2)
  array.sort(function (a, b) { return b - a })
  score += (array[0] + array[1])
  max = Math.max(max, score)
}
console.log(max)
