let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
let t = parseInt(input[index])
for (let i = 0; i < t; i++) {
  index++
  let finishCount = 0
  let k = parseInt(input[index++])
  let players = input[index++].split(' ')
  let n = parseInt(input[index])
  let bestMinute = 60
  let bestSecond = 60
  let bestPlayer = ''
  for (let j = 0; j < n; j++) {
    index++
    let line = input[index].split(' ')
    if (!players.includes(line[0])) {
      continue
    }
    if (line[1] === '-1' && line[2] === '-1') {
      continue
    }
    if (parseInt(line[1]) < 6 || (parseInt(line[1]) === 6 && parseInt(line[2]) === 0)) {
      finishCount++
    }
    if (bestMinute > parseInt(line[1])) {
      bestPlayer = line[0]
      bestMinute = parseInt(line[1])
      bestSecond = parseInt(line[2])
    }else if (bestMinute === parseInt(line[1])) {
      if (bestSecond > parseInt(line[2])) {
        bestPlayer = line[0]
        bestSecond = parseInt(line[2])
      }
    }
  }
  answer += (bestPlayer + ' ' + finishCount + '\n')
}
console.log(answer)
