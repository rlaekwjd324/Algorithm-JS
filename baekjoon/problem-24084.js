let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = parseInt(input[0])
let s = input[1].split('')
let answer = ''
for (let i = 1; i < n; i++) {
  if (s[i] === 'J') {
    answer += (s[i - 1] + '\n')
  }
}
console.log(answer)
