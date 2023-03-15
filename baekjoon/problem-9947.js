let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '# #') {
  let firstPlayerName = input[index].split(' ')[0]
  let secondPlayerName = input[index].split(' ')[1]
  index++
  let gameCount = parseInt(input[index])
  let firstWinCount = 0
  let secondWinCount = 0
  for (let i = 0; i < gameCount; i++) {
    index++
    if (input[index].split(' ')[0] === input[index].split(' ')[1]) {
      firstWinCount++
    }else {
      secondWinCount++
    }
  }
  answer += (firstPlayerName + ' ' + firstWinCount + ' ' + secondPlayerName + ' ' + secondWinCount + '\n')
  index++
}
console.log(answer)
