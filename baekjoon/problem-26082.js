let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = parseInt(input[0].split(' ')[0])
let b = parseInt(input[0].split(' ')[1])
let c = parseInt(input[0].split(' ')[2])
console.log((b / a * 3 * c))
