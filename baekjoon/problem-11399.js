let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = input[1].split(' ').map(function (v) {return parseInt(v)})
array.sort(function (a, b) {return parseInt(a) - parseInt(b)})
let sum = 0
for (let i = 0; i < n; i++) {
  sum += (array[i] * (n - i))
}
console.log(sum)
