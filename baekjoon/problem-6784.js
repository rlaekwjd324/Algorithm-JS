let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let count = 0
for (let i = 1; i <= n; i++) {
  if (input[i] === input[n + i]) {
    count++
  }
}
console.log(count)
