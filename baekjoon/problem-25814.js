let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
let input = fs.readFileSync('test.txt').toString().trim().split(' ')
let a = input[0].split('')
let b = input[1].split('')
let firstSum = 0
for (let i = 0; i < a.length; i++) {
  firstSum += Number(a[i])
}
firstSum *= a.length
let secondSum = 0
for (let i = 0; i < b.length; i++) {
  secondSum += Number(b[i])
}
secondSum *= b.length
if (firstSum > secondSum) {
  return console.log(1)
}
if (firstSum < secondSum) {
  return console.log(2)
}
console.log(0)