let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
let array = []
for (let i = 1; i <= n; i++) {
  array.push(input[i])
}
let m = Number(input[n + 1])
for (let i = n + 2; i < n + 2 + m; i++) {
  let start = Number(input[i].split(' ')[0]) - 1
  let end = Number(input[i].split(' ')[1]) - 1
  for (let j = start; j <= end; j++) {
    answer += (array[j] + '\n')
  }
}
console.log(answer)
