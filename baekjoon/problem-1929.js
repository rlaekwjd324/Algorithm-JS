let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let answer = ''
if (n < 2) {
  n++
}
for (let i = n; i <= m; i++) {
  if (isRight(i)) {
    answer += (i + '\n')
  }
}
console.log(answer)

function isRight (number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
