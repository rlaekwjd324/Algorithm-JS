let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let temp = 2
for (let i = 0; i < n; i++) {
    temp = temp + temp - 1
}
console.log(temp * temp)
// 0 : 2*2 = 4
// 1 : 3*3 = 9
// 2 : 5*5 = 25
// 3 : 9*9 = 81
// 4 : 17*17 = 289
// 5 : 33*33 = 1089