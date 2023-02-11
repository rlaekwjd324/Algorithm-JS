let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
let num = (n - 1) * 4 + 1
for (let i = 0; i < num; i++) {
  if (i === 0 || i === num - 1) {
    answer += ('*'.repeat(num) + '\n')
    continue
  }
  for (let j = 0; j < num; j++) {
    if (j === 0 || j === num - 1) {
      answer += '*'
      continue
    }
    if (i % 2 === 0) {
      if (i <= num / 2 && j >= i && j <= num - i - 1) {
        answer += '*'
        continue
      }
      if (i > num / 2 && j >= num - i - 1 && j <= i) {
        answer += '*'
        continue
      }
      if (j % 2 === 0) {
        answer += '*'
        continue
      }
    }
    if (i % 2 === 1) {
      if (i <= num / 2 && (j < i || j > num - i - 1)) {
        if (j % 2 === 0) {
          answer += '*'
          continue
        }
      }
      if (i > num / 2 && (j < num - i - 1 || j > i)) {
        if (j % 2 === 0) {
          answer += '*'
          continue
        }
      }
    }
    answer += ' '
  }
  answer += '\n'
}
console.log(answer)
