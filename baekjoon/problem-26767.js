let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  if (i % 7 === 0 && i % 11 !== 0) {
    answer += 'Hurra!\n'
  }else if (i % 7 !== 0 && i % 11 === 0) {
    answer += 'Super!\n'
  }else if (i % 7 === 0 && i % 11 === 0) {
    answer += 'Wiwat!\n'
  }else {
    answer += (i + '\n')
  }
}
console.log(answer)
