let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let t = parseInt(input[index++])
let answer = ''
for (let i = 0; i < t; i++) {
  let days = parseInt(input[index++])
  let value = 0
  for (let j = 0; j < days; j++) {
    let line = input[index++].split(' ').map(function (v) {return parseInt(v)})
    let maxValue = Math.max(Math.max(line[0], line[1]), line[2])
    value += (maxValue > 0 ? maxValue : 0)
  }
  answer += (value + '\n')
}
console.log(answer)
