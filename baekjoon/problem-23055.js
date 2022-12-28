let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
      answer += '*'
      if (i === n - 1) {
        answer += '\n'
      }
      continue
    }
    if (i < parseInt(n / 2)) {
    }
    answer += ' '
  }
}
