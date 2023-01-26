let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = parseInt(input[0].split(' ')[0])
let b = parseInt(input[0].split(' ')[1])
let x = parseInt(input[0].split(' ')[2])
let y = parseInt(input[0].split(' ')[3])
if (a > b) {
  let temp = a
  a = b
  b = temp
}
if (x > y) {
  let temp = x
  x = y
  y = temp
}
let standardDistance = b - a
let teleportationDistance = Math.abs(x - a) + Math.abs(y - b)
console.log(Math.min(standardDistance, teleportationDistance))
