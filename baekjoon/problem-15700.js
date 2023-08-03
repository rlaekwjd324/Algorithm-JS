let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = BigInt(input[0].split(' ')[0])
let b = BigInt(input[0].split(' ')[1])
let answer = (a * b) % 2n === 0n ? (a * b) / 2n : (a * b-1n) / 2n
console.log(answer.toString())
