let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let nickname = input[0].split(' ')[1]
let answer = ''
let count = 0
for (let i = n; i > 0; i--) {
  let tempNickname = input[i].split(' ')[0]
  let tempAnswer = input[i].split(' ')[1]
  if (tempNickname === nickname) {
    answer = tempAnswer
  }else {
    if (tempAnswer === answer) {
      count++
    }
  }
}
console.log(count)
