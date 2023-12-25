let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let word = input[i].split(' ')[0].split('')
  let index = Number(input[i].split(' ')[1])
  let length = Number(input[i].split(' ')[2])
  word.splice(index, length - index)
  answer += (word.join('') + '\n')
}
console.log(answer)
