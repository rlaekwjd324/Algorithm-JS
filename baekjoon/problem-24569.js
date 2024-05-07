let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let count = 0
for (let i = 0; i < n; i++) {
  let d = Number(input[i * 2 + 1])
  let s = Number(input[i * 2 + 2])
  if ((d * 5 - s * 3) > 40) {
    count++
  }
}
let answer = count
if (count === n) {
  answer += '+'
}
console.log(answer)
