let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let n = parseInt(input[i])
  for (let j = parseInt(n / 2); j >= 1; j--) {
    if (isRight(j) && isRight(n - j)) {
      answer += (j + ' ' + (n - j) + '\n')
      break
    }
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
