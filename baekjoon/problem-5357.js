let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let word = input[i].split('')
  let preWord = ''
  for (let j = 0; j < word.length; j++) {
    if (preWord === word[j]) {
      word[j] = ''
    }else {
      preWord = word[j]
    }
  }
  answer += (word.join('') + '\n')
}
console.log(answer)
