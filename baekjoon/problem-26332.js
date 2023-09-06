let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let count = Number(input[i].split(' ')[0])
  let value = Number(input[i].split(' ')[1])
  let sum = value
  if (count > 1) {
    sum += ((value - 2) * (count - 1))
  }
  answer += (input[i] + '\n')
  answer += (sum + '\n')
}
console.log(answer)
