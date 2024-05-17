let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let alphabet = String.fromCharCode(97 + ((n - 1) % 8))
let number = parseInt((n - 1) / 8) + 1
console.log(alphabet + number)
