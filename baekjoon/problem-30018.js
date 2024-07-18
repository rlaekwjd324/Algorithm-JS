let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let a = input[1].split(' ')
let b = input[2].split(' ')
let count = 0
for (let i = 0; i < n; i++) {
  count += Math.abs(a[i] - b[i])
}
console.log(count / 2)
