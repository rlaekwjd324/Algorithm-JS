let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0') {
  let t = Number(input[index].split(' ')[0])
  let array = []
  for (let i = 1; i <= t; i++) {
    array.push(Number(input[index].split(' ')[i]))
  }
  if (t % 2 === 0) {
    answer += ('Case ' + (index + 1) + ': ' + ((array[(t / 2)] + array[(t / 2) - 1]) / 2).toFixed(1) + '\n')
  }else {
    answer += ('Case ' + (index + 1) + ': ' + array[(t + 1) / 2 - 1].toFixed(1) + '\n')
  }
  index++
}
console.log(answer)
