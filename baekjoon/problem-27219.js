let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let vCount = parseInt(a / 5)
let iCount = a % 5
console.log('V'.repeat(vCount) + 'I'.repeat(iCount))
