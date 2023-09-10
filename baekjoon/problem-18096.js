let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
// (a+1)(b+1)-a-b-a*b
// a*b+a+b+1-a-b-a*b = 1
console.log(1)