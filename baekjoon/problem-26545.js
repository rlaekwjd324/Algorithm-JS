let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let sum = 0
for (let i = 1; i <= parseInt(input[0]);i++) {
  sum += parseInt(input[i])
}
console.log(sum)
