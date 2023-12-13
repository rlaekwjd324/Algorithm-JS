let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  answer += (i + ' ')
  if (i % 6 === 0 || i === n) {
    answer += ('Go! ')
  }
}
console.log(answer)
