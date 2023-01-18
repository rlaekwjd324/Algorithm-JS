let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n; i++) {
  let l = parseInt(input[i * 3 + 1])
  let answerKey = input[i * 3 + 2].split('')
  let responseKey = input[i * 3 + 3].split('')
  let incorrectCounts = 0
  for (let j = 0; j < l; j++) {
    answerKey[j] !== responseKey[j] ? incorrectCounts++ : incorrectCounts
  }
  answer += ('Case ' + (i + 1) + ': ' + incorrectCounts + '\n')
}
console.log(answer)
