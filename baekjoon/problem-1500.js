let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let s = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let answer = 1
let tempK = k
for (let i = 0; i < k - 1; i++) {
  answer *= Math.floor(s / tempK)
  s -= Math.floor(s / tempK)
  tempK--
}
answer *= s
console.log(answer)
