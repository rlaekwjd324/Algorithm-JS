let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let num1 = 0
for (let i = 0; i < n; i++) {
  num1 += Number(input[1].split(' ')[i])
}
let num2 = 1
for (let i = 0; i < m; i++) {
  if (Number(input[2].split(' ')[i]) !== 0) {
    num1 *= Number(input[2].split(' ')[i])
  }
}
console.log(num1 * num2)
