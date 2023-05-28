let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let a = parseInt(input[0].split(' ')[1])
let b = parseInt(input[0].split(' ')[2])
if(a===b) {
    return console.log('Anything')
}
if(a>b) {
    return console.log('Subway')
}
console.log('Bus')