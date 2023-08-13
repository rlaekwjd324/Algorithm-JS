let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let valueFirst = n * 0.78
let valueSecond = n - n * 0.2 * 0.22
console.log(valueFirst + ' ' + valueSecond)
