let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let sum = 0
for (let i = 0; i < 6; i++) {
  sum += Number(input[0].split(' ')[i])
}
console.log(sum * 5)
