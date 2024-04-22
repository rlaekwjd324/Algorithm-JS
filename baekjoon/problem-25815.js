let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let y = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let age = 0
let month = 0
if (y >= 1) {
  age += 15
}
if (y >= 2) {
  age += 9
}
if (y >= 3) {
  age += 4 * (y - 2)
}
if (y >= 2) {
  month = 4 * m
}else if (y >= 1) {
  month = 9 * m
}else {
  month = 15 * m
}
age += parseInt((month) / 12)
month -= (parseInt((month) / 12) * 12)
console.log(age + ' ' + month)
