let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let d = BigInt(input[0])
let num = BigInt(1)
for (let i = 11; i <= d; i++) {
  num *= BigInt(i)
}
num = num * BigInt(6)
console.log(Number(num))
