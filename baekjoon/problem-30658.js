let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] != '0') {
  let n = Number(input[index])
  let array = []
  for (let i = 0; i < n; i++) {
    index++
    array.push(Number(input[index]))
  }
  answer += (array.reverse().join('\n') + '\n0\n')
  index++
}
console.log(answer)
