let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let p = Number(input[0])
let c = Number(input[1])
let score = p * 50 - c * 10
if (p > c) {
  score += 500
}
console.log(score)
