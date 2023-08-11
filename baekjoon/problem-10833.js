let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let sum = 0
for (let i = 1; i <= a; i++) {
  let studentCount = Number(input[i].split(' ')[0])
  let appleCount = Number(input[i].split(' ')[1])
  sum += (appleCount % studentCount)
}
console.log(sum)
