let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    answer += ('DeadMan\n')
    continue
  }
  if (i % 3 === 0) {
    answer += ('Dead\n')
    continue
  }
  if (i % 5 === 0) {
    answer += ('Man\n')
    continue
  }
  answer += (i + ' ')
}
console.log(answer)
