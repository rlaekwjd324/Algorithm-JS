let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let c = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let p = Number(input[0].split(' ')[2])
let sum = 0
for (let i = 1; i <= c; i++) {
  sum += (k * i + p * i * i)
}
console.log(sum)
