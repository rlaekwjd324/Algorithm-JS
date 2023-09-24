let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
if(b>=c) {
    return console.log(-1)
}
console.log(Math.ceil((a / (c - b)) % 1 === 0 ? a / (c - b) + 1 : a / (c - b) / 1))
