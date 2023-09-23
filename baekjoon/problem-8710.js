let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let k = Number(input[0].split(' ')[0])
let w = Number(input[0].split(' ')[1])
let m = Number(input[0].split(' ')[2])
let count = (w-k)/m
return console.log(Math.ceil(count))