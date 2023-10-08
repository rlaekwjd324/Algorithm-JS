let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let min = 5
let answer = ''
for (let i = 1; i <= n; i++) {
  let problemName = input[i].split(' ')[0]
  let score = Number(input[i].split(' ')[1])
  if (score < min) {
    answer = problemName
    min = score
  }
}
console.log(answer)
