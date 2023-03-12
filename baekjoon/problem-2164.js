let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let tempN = n
let count = 0
while(tempN > 1) {
  count++
  tempN = parseInt(tempN / 2)
}
console.log(Math.pow(2, count) === n ? n : (n - Math.pow(2, count)) * 2)

// 1 -> 1 :
// 2 -> 2 : 
// 3 -> 2 :
// 4 -> 4 : 
// 5 -> 2 : 
// 6 -> 4 : 
// 7 -> 6 : 
// 8 -> 8 : 
// 9 -> 2 : 
// 10 -> 4 : 
// 11 -> 6 : 
// 12 -> 8 : 
// 13 -> 10 : 
// 14 -> 12 : 
// 15 -> 14 : 
// 16 -> 16 : 
