let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('')
let answer = word[0]
for (let i = 1; i < word.length; i++) {
  if (word[i] === word[i - 1]) {
    continue
  }
  answer += word[i]
}
console.log(answer)
