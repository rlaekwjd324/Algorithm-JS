let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let a = parseInt(input[i].split(' ')[0])
  let b = parseInt(input[i].split(' ')[1])
  answer += (parseInt(a * b / 2) + '\n')
}
console.log(answer)
