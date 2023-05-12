let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let word = input[0]
console.log((word.length + (word.split('_').length - 1) * 5 + (word.split(':').length - 1)))
