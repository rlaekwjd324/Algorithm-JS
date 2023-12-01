let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let j = 1; j <= n; j++) {
  let i = Number(input[j].split(' ')[0])
  let f = Number(input[j].split(' ')[1])
  if (i <= 2 && f <= 1) {
    answer += ('Yes\n')
    continue
  }
  if (i <= 1 && f <= 2) {
    answer += ('Yes\n')
    continue
  }
  answer += ('No\n')
}
console.log(answer)
