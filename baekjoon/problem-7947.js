let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let z = Number(input[0])
let answer = ''
for (let i = 0; i < z; i++) {
  let r = 0
  let g = 0
  let b = 0
  for (let j = 0; j < 10; j++) {
    r += Number(input[i * 10 + j + 1].split(' ')[0])
    g += Number(input[i * 10 + j + 1].split(' ')[1])
    b += Number(input[i * 10 + j + 1].split(' ')[2])
  }
  answer += (Math.round(r / 10) + ' ' + Math.round(g / 10) + ' ' + Math.round(b / 10) + '\n')
}
console.log(answer)
