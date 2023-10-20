let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = input[0].split(' ').map(function (v) { return Number(v)})
array.sort(function (a, b) { return a - b})
let a = array[0]
let b = array[1]
let c = array[6] - a - b
console.log(a + ' ' + b + ' ' + c)
