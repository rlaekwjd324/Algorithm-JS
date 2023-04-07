let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let sum = BigInt(0)
for (let i = 0; i < n.length; i++) {
  let tempNum = n.pop()
  n.unshift(tempNum)
  sum += BigInt(n.join(''))
}
console.log(sum.toString())
