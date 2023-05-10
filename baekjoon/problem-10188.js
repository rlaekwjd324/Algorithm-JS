let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let x = parseInt(input[i].split(' ')[0])
  let y = parseInt(input[i].split(' ')[1])
  for (let j = 1; j <= y; j++) {
    for (let k = 1; k <= x; k++) {
      answer += 'X'
    }
    answer += '\n'
  }
  answer += '\n'
}
console.log(answer)