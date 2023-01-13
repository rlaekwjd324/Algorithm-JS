let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let array = new Array(m)
let line = input[1].split(' ').map(function (v) { return parseInt(v)})
for (let i = 0; i < m; i++) {
  array[i] = 0
}
for (let i = 0; i < n; i++) {
  array[line[i] - 1]++
}
array.sort(function (a, b) { return b - a})
console.log(array[0])
