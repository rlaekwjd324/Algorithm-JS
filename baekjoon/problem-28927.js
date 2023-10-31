let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
let max = a * 3 + b * 20 + c * 120
a = Number(input[1].split(' ')[0])
b = Number(input[1].split(' ')[1])
c = Number(input[1].split(' ')[2])
let mel = a * 3 + b * 20 + c * 120
console.log(max > mel ? 'Max' : max < mel ? 'Mel' : 'Draw')
