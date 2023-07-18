let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = parseInt(input[0].split(' ')[0])
let b = parseInt(input[0].split(' ')[1])
let answer = ''
for (let i = 1; i <= a; i++) {
  if (a % i === 0 && b % i === 0) {
    answer += (i + ' ' + a / i + ' ' + b / i + '\n')
  }
}
console.log(answer)
