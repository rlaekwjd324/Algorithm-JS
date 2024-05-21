let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let maxScore = 0
let winnerCount = 0
let winnerTime = 0
let winner = 0
for (let i = 1; i <= n; i++) {
  let score = Number(input[i].split(' ')[0])
  let count = Number(input[i].split(' ')[1])
  let time = Number(input[i].split(' ')[2])
  if (maxScore < score) {
    maxScore = score
    winnerCount = count
    winnerTime = time
    winner = i
  }else if (maxScore === score) {
    if (winnerCount > count) {
      winnerCount = count
      winnerTime = time
      winner = i
    }else if (winnerCount === count) {
      if (winnerTime > time) {
        winnerTime = time
        winner = i
      }
    }
  }
}
console.log(winner)
