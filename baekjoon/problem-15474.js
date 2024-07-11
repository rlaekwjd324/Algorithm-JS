let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let a = Number(input[0].split(' ')[1])
let b = Number(input[0].split(' ')[2])
let c = Number(input[0].split(' ')[3])
let d = Number(input[0].split(' ')[4])
let ab = Math.ceil(n / a) * b
let cd = Math.ceil(n / c) * d
console.log(Math.min(ab, cd))
