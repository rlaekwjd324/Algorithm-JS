let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let counts = [12, 11, 11, 10, 9, 9, 9, 8, 7, 6, 6]
let scores = [1600, 894, 1327, 1311, 1004, 1178, 1357, 837, 1055, 556, 773]
console.log(counts[n - 1] + ' ' + scores[n - 1])
