let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 0; i < input.length; i++) {
  let n = BigInt(input[i])
  let number = '1'
  while(true) {
    if (BigInt(number) % n === 0n) {
      answer += (number.length + '\n')
      break
    }
    number += '1'
  }
}
console.log(answer)
