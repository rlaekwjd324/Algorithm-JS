let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n * 5; i++) {
  if (i >= n && i < n * 4) {
    answer += '@'.repeat(n)
    answer += ' '.repeat(n)
    answer += '@'.repeat(n)
    answer += ' '.repeat(n)
    answer += '@'.repeat(n)
  }else if (i < n) {
    answer += '@'.repeat(n * 3)
    answer += ' '.repeat(n)
    answer += '@'.repeat(n)
  }else {
    answer += '@'.repeat(n)
    answer += ' '.repeat(n)
    answer += '@'.repeat(n * 3)
  }
  answer += '\n'
}
console.log(answer)
