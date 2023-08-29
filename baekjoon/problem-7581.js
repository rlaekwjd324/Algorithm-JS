let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0 0 0 0') {
  let a = Number(input[index].split(' ')[0])
  let b = Number(input[index].split(' ')[1])
  let c = Number(input[index].split(' ')[2])
  let d = Number(input[index].split(' ')[3])
  if (a === 0) {
    answer += ((d / b / c) + ' ' + b + ' ' + c + ' ' + d + '\n')
  }else if (b === 0) {
    answer += (a + ' ' + (d / a / c) + ' ' + c + ' ' + d + '\n')
  }else if (c === 0) {
    answer += (a + ' ' + b + ' ' + (d / a / b) + ' ' + d + '\n')
  }else {
    answer += (a + ' ' + b + ' ' + c + ' ' + (a * b * c) + '\n')
  }
  index++
}
console.log(answer)
