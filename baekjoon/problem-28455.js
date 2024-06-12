let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = []
for (let i = 1; i <= n; i++) {
  array.push(Number(input[i]))
}
array.sort(function (a, b) { return b - a})
let sum = 0
let plus = 0
for (let i = 0; i < Math.min(n, 42); i++) {
  sum += array[i]
  if (array[i] >= 250) {
    plus += 5
  }else if (array[i] >= 200) {
    plus += 4
  }else if (array[i] >= 140) {
    plus += 3
  }else if (array[i] >= 100) {
    plus += 2
  }else if (array[i] >= 60) {
    plus += 1
  }
}
console.log(sum + ' ' + plus)
