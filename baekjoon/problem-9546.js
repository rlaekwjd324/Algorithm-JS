let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let count = parseInt(input[i])
  let num = 0
  for (let j = 0; j < count; j++) {
    num += 0.5
    num *= 2
  }
  answer += (num + '\n')
}
console.log(answer)
