let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let h = Number(input[0].split(' ')[0])
let i = Number(input[0].split(' ')[1])
let a = Number(input[0].split(' ')[2])
let r = Number(input[0].split(' ')[3])
let c = Number(input[0].split(' ')[4])
console.log(h * i - a * r * c)
