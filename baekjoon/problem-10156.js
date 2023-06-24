let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let k = parseInt(input[0].split(' ')[0])
let n = parseInt(input[0].split(' ')[1])
let m = parseInt(input[0].split(' ')[2])
let num = k * n - m
console.log(num > 0 ? num : 0)
