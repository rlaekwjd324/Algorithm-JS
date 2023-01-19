let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = 0
let min = 100000
for (let i = 1; i <= n; i++) {
  let j = parseInt(input[i].split(' ')[0])
  let m = parseInt(input[i].split(' ')[1])
  let tempCount = parseInt((j - 1) / (m + 1)) * 2 + 2
  if (min > (tempCount)) {
    min = tempCount
    answer = i
  }
}
console.log(answer + ' ' + min)
