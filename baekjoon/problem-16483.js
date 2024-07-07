let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
// t * b = a^2
// a^2 - b^2 = t*b - b^2
// = (t-b) * b
// a^2 * 2 = t^2
// t*b = t^2/2
// b = t/2
// a^2 - b^2 = t*t/2 - (t/2)^2 = (1/2 - 1/4)t^2
console.log(Math.floor(t*t/4))
