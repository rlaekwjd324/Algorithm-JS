let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let k = parseInt(input[0].split(' ')[1])
let array = new Array(n)
let answer = ''
for (let i = 1; i <= n; i++) {
  array[i - 1] = input[i].split(' ')
  let line = ''
  for (let j = 0; j < n; j++) {
    line += (array[i - 1][j] + ' ').repeat(k)
  }
  answer += (line + '\n').repeat(k)
}
console.log(answer)
