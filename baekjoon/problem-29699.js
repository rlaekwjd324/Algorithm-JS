let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let index = (n - 1) % 14
let word = 'WelcomeToSMUPC'.split('')
console.log(word[index])