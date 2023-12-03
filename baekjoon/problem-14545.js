let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let temp = Number(input[i])
  let count = 0
  for (let j = 1; j <= temp; j++) {
    count += (j * j)
  }
  answer += (count + '\n')
}
console.log(answer)
