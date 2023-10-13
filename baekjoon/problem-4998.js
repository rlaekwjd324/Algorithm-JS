let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 0; i < input.length; i++) {
  let n = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  let m = Number(input[i].split(' ')[2])
  let year = 0
  while (m > n) {
    n *= ((100 + b) / 100)
    year++
  }
  answer += (year + '\n')
}
console.log(answer)
