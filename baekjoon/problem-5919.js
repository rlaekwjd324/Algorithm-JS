let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let pileSum = 0
for (let i = 1; i <= parseInt(input[0]);i++) {
  pileSum += parseInt(input[i])
}
let avgPile = pileSum / parseInt(input[0])
let answer = 0
for (let i = 1; i <= parseInt(input[0]);i++) {
  answer += Math.abs(avgPile - parseInt(input[i]))
}
console.log(answer / 2)
