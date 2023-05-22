let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let counts = new Array(4)
  let value = parseInt(input[i])
  counts[0] = parseInt(value / 25)
  value -= 25 * counts[0]
  counts[1] = parseInt(value / 10)
  value -= 10 * counts[1]
  counts[2] = parseInt(value / 5)
  value -= 5 * counts[2]
  counts[3] = parseInt(value / 1)
  answer += (counts.join(' ') + '\n')
}
console.log(answer)
