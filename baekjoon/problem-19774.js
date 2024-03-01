let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let first = Number(input[i].substring(0, 2))
  let second = Number(input[i].substring(2, 4))
  let sum = first * first + second * second
  if (sum % 7 === 1) {
    answer += ('YES\n')
  }else {
    answer += ('NO\n')
  }
}
console.log(answer)
