let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let a = Number(input[0])
let m = Number(input[1].split(' ')[0])
let n = Number(input[1].split(' ')[1])
let small = m
let big = n
if(m>n) {
  small = n
  big = m
}
let min = Math.max(small, big/a)
min = Math.min(min, small/a*2)
console.log(min)
