let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  answer += (input[i] + ' ' + input[i] + '\n')
}
console.log(answer)
