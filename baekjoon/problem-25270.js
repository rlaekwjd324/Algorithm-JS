let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = 0
if (n < 100) {
  answer = parseInt((n + 100) / 100) * 100 - 1
}else if (n % 100 >= 49) {
  answer = parseInt(n / 100) * 100 + 99
}else {
  answer = parseInt(n / 100) * 100 - 1
}
console.log(answer)
