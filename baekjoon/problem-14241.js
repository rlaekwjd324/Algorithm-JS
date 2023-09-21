let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let slimes = []
for (let i = 0; i < t; i++) {
  slimes.push(Number(input[1].split(' ')[i]))
}
slimes.sort(function (a, b) { return b - a})
let score = 0
for (let i = 1; i < t; i++) {
  score += (slimes[0] * slimes[1])
  slimes[1] = slimes[0] + slimes[1]
  slimes.shift()
}
console.log(score)
