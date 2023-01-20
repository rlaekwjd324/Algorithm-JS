let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
let index = 1
for (let i = 1; i <= t; i++) {
  let n = parseInt(input[index++])
  let sumCount = 0
  let maxCount = 0
  let winnerIndex = 0
  for (let j = 1; j <= n; j++) {
    let tempCount = parseInt(input[index++])
    sumCount += tempCount
    if (maxCount < tempCount) {
      maxCount = tempCount
      winnerIndex = j
    }else if (maxCount === tempCount) {
      winnerIndex = 0
    }
  }
  answer += (winnerIndex === 0 ? ('no winner\n') : (maxCount * 2 <= sumCount ? ('minority winner ' + winnerIndex + '\n') : ('majority winner ' + winnerIndex + '\n')))
}
console.log(answer)
