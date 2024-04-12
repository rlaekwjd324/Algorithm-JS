let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
while (n % 2 === 1) {
  n = Math.ceil(n / 2)
}
console.log(n)
