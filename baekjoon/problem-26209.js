let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
console.log(input.includes('9') ? 'F' : 'S')
