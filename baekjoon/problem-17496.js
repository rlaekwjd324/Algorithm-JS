let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let t = parseInt(input[0].split(' ')[1])
let c = parseInt(input[0].split(' ')[2])
let p = parseInt(input[0].split(' ')[3])
let day = n % t === 0 ? parseInt(n / t) - 1 : parseInt(n / t)
console.log(day * c * p)
