let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let strength = input[1].split(' ').map(function (v) { return Number(v)})
let position = strength.indexOf(-1)
let minLeft = 1000000000
let minRight = 1000000000
for (let i = 0; i < position; i++) {
  minLeft = Math.min(minLeft, strength[i])
}
for (let i = position + 1; i < n; i++) {
  minRight = Math.min(minRight, strength[i])
}
console.log(minLeft + minRight)
