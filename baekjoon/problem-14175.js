let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let k = parseInt(input[0].split(' ')[2])
let answer = ''
for (let i = 1; i <= n; i++) {
  let line = input[i].split('')
  let newLine = ''
  for (let j = 0; j < m; j++) {
    newLine += (line[j].repeat(k))
  }
  answer += (newLine + '\n').repeat(k)
}
console.log(answer)
