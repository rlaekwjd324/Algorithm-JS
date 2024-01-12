let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[0].split('')
let number = BigInt(0)
for (let i = 0; i < a.length; i++) {
  number += BigInt(a[i]) * BigInt(Math.pow(2, a.length - i - 1))
}
number *= BigInt(17)
let answer = ''
while (number > 0) {
  answer = (number % BigInt(2)) + answer
  number = (number / BigInt(2)) / BigInt(1)
}
console.log(answer)
