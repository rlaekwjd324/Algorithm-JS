let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let teamA = input[0].split(' ').map(function (v) { return parseInt(v)})
let teamB = input[1].split(' ').map(function (v) { return parseInt(v)})
let sumA = teamA[0] * 6 + teamA[1] * 3 + teamA[2] * 2 + teamA[3] * 1 + teamA[4] * 2
let sumB = teamB[0] * 6 + teamB[1] * 3 + teamB[2] * 2 + teamB[3] * 1 + teamB[4] * 2
console.log(sumA + ' ' + sumB)
