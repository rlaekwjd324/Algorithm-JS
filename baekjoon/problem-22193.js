let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = BigInt(input[1])
let m = BigInt(input[2])
console.log((n * m).toString())
