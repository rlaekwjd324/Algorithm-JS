let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let b = Number(input[1])
let answer = ''
answer += (a * Number(b.toString().split('')[2]) + '\n')
answer += (a * Number(b.toString().split('')[1]) + '\n')
answer += (a * Number(b.toString().split('')[0]) + '\n')
answer += (a * b)
console.log(answer)
