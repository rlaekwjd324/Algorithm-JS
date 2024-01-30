let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let numbers = input[0].split(' ').map(function (n) { return parseInt(n)})
numbers.sort(function (a, b) { return a-b})
if(numbers[1]-numbers[0]<numbers[2]-numbers[1]) {
    return console.log(numbers[1]+numbers[1]-numbers[0])
}
if(numbers[1]-numbers[0]===numbers[2]-numbers[1]) {
    return console.log(numbers[2]+numbers[1]-numbers[0])
}
return console.log(numbers[1]-numbers[2]+numbers[1])