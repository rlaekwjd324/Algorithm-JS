let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n; i++) {
  if (i === 0 || i === n - 1) {
    answer += ('*'.repeat(n) + '\n')
    continue
  }
  for (let j = 0; j < n; j++) {
    if (j === 0 || j === n - 1) {
      answer += '*'
      continue
    }
    if (i === j || i === n - j - 1) {
      answer += '*'
      continue
    }
    answer += ' '
  }
  answer += '\n'
}
console.log(answer)
