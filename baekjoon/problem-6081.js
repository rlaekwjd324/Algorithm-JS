let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let q = Number(input[0].split(' ')[1])
let array = []
for (let i = 1; i <= n; i++) {
  array.push(Number(input[i]))
}
let answer = ''
for (let i = n + 1; i <= n + q; i++) {
  let s = 0
  for (let j = Number(input[i].split(' ')[0]) - 1; j < Number(input[i].split(' ')[1]); j++) {
    s += array[j]
  }
  answer += (s + '\n')
}
console.log(answer)
