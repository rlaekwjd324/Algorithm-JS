let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let num = Number(input[i])
  let temp = 1
  for (let j = 2; j <= num; j++) {
    temp *= j
  }
  answer += ((temp % 10) + '\n')
}
console.log(answer)
