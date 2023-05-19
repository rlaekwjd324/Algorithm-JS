let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let line = input[i].split('')
  answer += (line.reverse().join('') + '\n')
}
console.log(answer)
