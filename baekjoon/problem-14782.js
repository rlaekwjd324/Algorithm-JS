let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let sum = 0
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    sum += (i + n / i)
  }
}
console.log(sum)
