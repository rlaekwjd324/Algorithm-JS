let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = BigInt(input[0])
let b = BigInt(input[1])
let x = (a - b) / 2n
console.log((x + BigInt(b)).toString() + '\n' + x.toString())
