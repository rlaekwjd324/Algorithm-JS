let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let h = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
console.log((h - 9) * 60 + m)
