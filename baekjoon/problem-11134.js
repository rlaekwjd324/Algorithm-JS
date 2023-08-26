let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let answer = ''
for (let i = 1; i <= a; i++) {
  let cookiesCount = Number(input[i].split(' ')[0])
  let cookiePerDay = Number(input[i].split(' ')[1])
  answer += (Math.ceil(cookiesCount / cookiePerDay) + '\n')
}
console.log(answer)
