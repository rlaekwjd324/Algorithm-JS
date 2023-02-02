let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let numbers = input[1].split(' ').map(function (v) {return parseInt(v)}).sort(function (a, b) {return a - b})
let sum = numbers[0]
let preNumber = numbers[0]
for (let i = 1; i < n; i++) {
  if (numbers[i] - preNumber > 1) {
    sum += numbers[i]
  }
  preNumber = numbers[i]
}
console.log(sum)
