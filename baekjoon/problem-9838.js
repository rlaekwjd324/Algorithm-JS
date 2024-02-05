let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = new Array(n)
for (let i = 1; i <= n; i++) {
  array[Number(input[i]) - 1] = i
}
console.log(array.join('\n'))
