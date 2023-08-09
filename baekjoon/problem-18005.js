let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = BigInt(input[0])
if(a%4n === 0n) {
  return console.log(2)
}
if(a%2n === 0n) {
  return console.log(1)
}
console.log(0)