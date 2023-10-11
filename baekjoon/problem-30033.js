let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let sum = 0
for (let i = 0; i < n; i++) {
  let a = Number(input[1].split(' ')[i])
  let b = Number(input[2].split(' ')[i])
  if (a <= b) {
    sum++
  }
}
console.log(sum)
