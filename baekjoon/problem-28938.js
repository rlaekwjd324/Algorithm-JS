let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let seq = input[1].split(' ')
let sum = 0
for (let i = 0; i < n; i++) {
  sum += Number(seq[i])
}
console.log(sum === 0 ? 'Stay' : sum < 0 ? 'Left' : 'Right')
