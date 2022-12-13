let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let number1 = parseInt(input[0].split(' ')[0])
let number2 = parseInt(input[0].split(' ')[1])
let a = 100 - number1
let b = 100 - number2
let c = 100 - (a + b)
let d = a * b
let q = parseInt(d / 100)
let r = d % 100
let answer = (a + ' ' + b + ' ' + c + ' ' + d + ' ' + q + ' ' + r + '\n')
answer += ((c + q) + ' ' + r)
console.log(answer)
