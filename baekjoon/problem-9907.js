let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let xNum = [2, 7, 6, 5, 4, 3, 2]
let sum = 0
for (let i = 0; i < n.length; i++) {
  sum += Number(n[i]) * xNum[i]
}
let alphabet = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Z']
console.log(alphabet[sum % 11])
