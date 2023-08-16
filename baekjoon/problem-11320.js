let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  answer += (Math.floor(a * a / b / b) + '\n')
}
console.log(answer)
