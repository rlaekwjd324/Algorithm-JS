let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = BigInt(input[0].split(' ')[0])
let b = BigInt(input[0].split(' ')[1])
let answer = BigInt(1)
for (let i = a; i <= b; i++) {
  let number = BigInt(0)
  for (let j = 1; j <= i; j++) {
    number += BigInt(j)
  }
  console.log(answer * number)
  console.log((answer * number) % BigInt(14579))
  answer = (answer * (number > 0 ? number : 1)) % 14579n
}
console.log(answer)
