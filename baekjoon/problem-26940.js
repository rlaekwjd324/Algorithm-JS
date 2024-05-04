let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let chocolates = input[1].split(' ')
let pre = Number(chocolates[0])
let count = 0
for (let i = 1; i < n; i++) {
  let num = Number(chocolates[i])
  if (pre < num) {
    count++
  }
  pre = num
}
console.log(count)
