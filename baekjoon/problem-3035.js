let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let r = Number(input[0].split(' ')[0])
let c = Number(input[0].split(' ')[1])
let zr = Number(input[0].split(' ')[2])
let zc = Number(input[0].split(' ')[3])
let array = []
let answer = ''
for (let i = 1; i <= r; i++) {
  array.push(input[i])
}
for (let i = 0; i < r;  i++) {
  let line = ''
  for (let j = 0; j < c; j++) {
    line += array[i][j].repeat(zc)
  }
  line += '\n'
  answer += (line.repeat(zr))
}
console.log(answer)
