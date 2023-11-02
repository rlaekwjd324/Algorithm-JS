let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '0') {
  let sum = 0
  let a = Number(input[index])
  for (let i = 1; i <= a; i++) {
    sum += i
  }
  answer += (sum + '\n')
  index++
}
console.log(answer)
