let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = BigInt(1)
for (let i = 2; i <= n; i++) {
  answer *= BigInt(i)
}
console.log(answer.toString())
