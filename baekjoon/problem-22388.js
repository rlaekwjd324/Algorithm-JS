let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '#') {
  let g = input[index].split(' ')[0]
  let y = Number(input[index].split(' ')[1])
  let m = Number(input[index].split(' ')[2])
  let d = Number(input[index].split(' ')[3])
  if (y > 31 || (y === 31 && m >= 5)) {
    y -= 30
    g = '?'
  }
  answer += (g + ' ' + y + ' ' + m + ' ' + d + '\n')
  index++
}
console.log(answer)
