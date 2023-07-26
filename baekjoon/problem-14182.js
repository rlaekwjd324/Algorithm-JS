let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0') {
  let number = Number(input[index])
  if (number > 5000000) {
    number = number * 0.8
  }else if (number > 1000000) {
    number = number * 0.9
  }
  answer += (number + '\n')
  index++
}
console.log(answer)
