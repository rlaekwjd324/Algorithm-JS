let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = []
for (let i = 1; i <= n; i++) {
  array.push(input[i])
}
array.sort(function (a, b) {return Number(a) - Number(b)})
console.log(array[1])
