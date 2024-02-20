let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let numbers = input[1].split(' ').map(function (v) { return Number(v)})
let count = 0
let score = 0
for (let i = 0; i < n; i++) {
  if (numbers[i] !== -1) {
    count++
    score += numbers[i]
  }
}
console.log(score/count)