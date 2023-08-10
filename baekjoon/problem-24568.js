let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let b = Number(input[1])
let cupcakeCount = a * 8 + b * 3
console.log(cupcakeCount - 28 > 0 ? cupcakeCount - 28 : 0)
