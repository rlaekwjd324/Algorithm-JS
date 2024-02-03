let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 0; i < input.length; i++) {
  answer += (input[i] + '\n')
}
console.log(answer)
