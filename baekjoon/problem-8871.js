let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
console.log((n+1)*2 + ' ' + ((n+1)*3)
