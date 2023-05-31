let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let n = parseInt(input[i].split(' ')[0])
  let m = parseInt(input[i].split(' ')[1])
  let u = m * 2 - n
  answer += (u + ' ' + (m - u) + '\n')
}
console.log(answer)
