let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let values = [350.34, 230.90, 190.55, 125.30, 180.90]
let answer = ''
for (let i = 1; i <= t; i++) {
  let sum = 0
  let line = input[i].split(' ').map(function (v) { return Number(v)})
  for (let j = 0; j < values.length; j++) {
    sum += (values[j] * line[j])
  }
  answer += ('$' + (Math.round(sum * 100) / 100).toFixed(2) + '\n')
}
console.log(answer)
