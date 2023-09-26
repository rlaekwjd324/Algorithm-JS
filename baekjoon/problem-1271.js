let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = BigInt(input[0].split(' ')[0])
let m = BigInt(input[0].split(' ')[1])
let answer = ''
answer += ((n / m) + '\n')
answer += ((n % m))
console.log(answer)
