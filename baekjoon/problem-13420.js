let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t;i++) {
  let line = input[i].split(' ')
  let firstParameter = BigInt(line[0])
  let secondParameter = BigInt(line[2])
  let calculateParameter = line[1]
  let answerParameter = BigInt(line[4])
  let result = false
  switch (calculateParameter) {
    case '+':
      if (firstParameter + secondParameter === answerParameter) {
        result = true
      }
      break
    case '-':
      if (firstParameter - secondParameter === answerParameter) {
        result = true
      }
      break
    case '*':
      if (firstParameter * secondParameter === answerParameter) {
        result = true
      }
      break
    case '/':
      if (firstParameter / secondParameter === answerParameter) {
        result = true
      }
      break
  }
  answer += (result ? 'correct\n' : 'wrong answer\n')
}
console.log(answer)
