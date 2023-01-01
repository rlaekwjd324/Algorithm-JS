let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let bus = input[1].split(' ').map(function (v) { return parseInt(v)})
let array = new Array(n)
for (let i = 2; i < n + 2; i++) {
  array[i - 2] = input[i].split(' ').map(function (v) { return parseInt(v)})
}
let answer = 0
for (let i = 0; i < m - 1; i++) {
  answer += (array[bus[i] - 1][bus[i + 1] - 1])
}
console.log(answer)
