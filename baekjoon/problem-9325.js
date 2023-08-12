let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let index = 0
let answer = ''
for (let i = 1; i <= t; i++) {
  let sum = 0
  index++
  let s = Number(input[index])
  index++
  let n = Number(input[index])
  for (let j = 1; j <= n; j++) {
    index++
    let q = Number(input[index].split(' ')[0])
    let p = Number(input[index].split(' ')[1])
    sum += q * p
  }
  sum += s
  answer += (sum + '\n')
}
console.log(answer)
