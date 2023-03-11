let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let index = 0
let answer = ''
for (let i = 0; i < n; i++) {
  index++
  let totalValue = 0
  let count = parseInt(input[index])
  for (let j = 0; j < count; j++) {
    index++
    let w = Number(input[index].split(' ')[1])
    let v = Number(input[index].split(' ')[2])
    totalValue += (w * v)
  }
  answer += ('$' + parseFloat(Math.round(totalValue * 100) / 100).toFixed(2) + '\n')
}
console.log(answer)
