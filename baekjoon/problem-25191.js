let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let a = parseInt(input[1].split(' ')[0])
let b = parseInt(input[1].split(' ')[1])
let max = parseInt(a / 2) + b
console.log(max < n ? max : n)
