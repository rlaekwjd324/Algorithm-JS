let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let year = parseInt(input[0])
let fridayCount = [2, 2, 1, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 2, 1, 2, 2, ]