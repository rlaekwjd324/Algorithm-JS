let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let sum = 0
let answer = 0
for (let i = 1; i <= n; i++) {
  let temp = Number(input[i])
  sum += temp
  if (sum < 0) {
    answer -= sum
    sum = 0
  }
}
console.log(answer)
