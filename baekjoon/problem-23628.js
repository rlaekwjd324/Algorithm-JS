let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let y1 = Number(input[0].split(' ')[0])
let m1 = Number(input[0].split(' ')[1])
let d1 = Number(input[0].split(' ')[2])
let y2 = Number(input[1].split(' ')[0])
let m2 = Number(input[1].split(' ')[1])
let d2 = Number(input[1].split(' ')[2])
let y = 0
let m = 0
let d = 0
d += (d2 - d1)
if (d < 0) {
  d += 30
  m--
}
m += (m2 - m1)
if (m < 0) {
  m += 12
  y--
}
y += (y2 - y1)
let totalDay = y * 12 * 30 + m * 30 + d
let totalMonth = y * 12 + m
if (totalMonth > 36) {
  totalMonth = 36
}
let totalYear = (15 + Math.floor((y - 1) / 2)) * y
console.log(totalYear + ' ' + totalMonth + '\n' + totalDay + 'days')
