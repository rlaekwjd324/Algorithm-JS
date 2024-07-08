let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
let d = Number(input[0].split(' ')[3])
let p = Number(input[1].split(' ')[0])
let m = Number(input[1].split(' ')[1])
let n = Number(input[1].split(' ')[2])
let p1 = p % (a + b)
let p2 = p % (c + d)
let m1 = m % (a + b)
let m2 = m % (c + d)
let n1 = n % (a + b)
let n2 = n % (c + d)
let ps = 0
if (p1 !== 0 && p1 <= a) {
  ps++
}
if (p2 !== 0 && p2 <= c) {
  ps++
}
let ms = 0
if (m1 !== 0 && m1 <= a) {
  ms++
}
if (m2 !== 0 && m2 <= c) {
  ms++
}
let ns = 0
if (n1 !== 0 && n1 <= a) {
  ns++
}
if (n2 !== 0 && n2 <= c) {
  ns++
}
console.log(ps)
console.log(ms)
console.log(ns)
