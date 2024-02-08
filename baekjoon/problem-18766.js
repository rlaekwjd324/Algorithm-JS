let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let index = 0
let answer = ''
for (let i = 1; i <= n; i++) {
  let cardCount = input[i * 3 - 2]
  let originCards = input[i * 3 - 1].split(' ')
  let changedCards = input[i * 3].split(' ')
  originCards.sort()
  changedCards.sort()
  for (let j = 0; j < cardCount; j++) {
    if (originCards[j] !== changedCards[j]) {
      answer += ('CHEATER\n')
      break
    }
    if (j === cardCount - 1) {
      answer += ('NOT CHEATER\n')
    }
  }
}
console.log(answer)
