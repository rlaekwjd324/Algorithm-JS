let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
let array = ['G...'.split(''), '.I.T'.split(''), '..S.'.split('')]
for (let i = 0; i < 3; i++) {
  let line = ''
  for (let j = 0; j < 4; j++) {
    line += array[i][j].repeat(n)
  }
  line += '\n'
  answer += line.repeat(n)
}
console.log(answer)
