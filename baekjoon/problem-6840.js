let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(function (v) { return parseInt(v) })
let input = fs.readFileSync('test.txt').toString().trim().split('\n').map(function (v) { return parseInt(v) })
input.sort(function (a, b) {
    return a - b
})
console.log(input[1])