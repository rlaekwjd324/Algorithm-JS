let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let p = Number(input[i])
  answer += ('++++ '.repeat(parseInt(p / 5)))
  answer += ('|'.repeat(p % 5))
  answer += '\n'
}
console.log(answer)
