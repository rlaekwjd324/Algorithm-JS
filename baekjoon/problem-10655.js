let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = new Array(n)
let max = 0
for (let i = 1; i <= n; i++) {
  array[i - 1] = input[i].split(' ').map(function (v) { return Number(v)})
}
let answer = 0
for (i = 0; i < n - 1; i++) {
  answer += getDistance(array[i], array[i + 1])
}
for (let i = 1; i < n - 1; i++) {
  let temp = getDistance(array[i - 1], array[i]) + getDistance(array[i + 1], array[i]) - getDistance(array[i + 1], array[i - 1])
  if (max < temp) {
    max = temp
  }
}
console.log(answer - max)

function getDistance (d1, d2) {
  return Math.abs(d1[0] - d2[0]) + Math.abs(d1[1] - d2[1])
}
