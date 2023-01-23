let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('').map(function (v) {return parseInt(v)})
let answer = 0
for (let i = 0; i < word.length - 2;i++) {
  if (word[i] + 1 === word[i + 1] && word[i + 1] + 1 === word[i + 2]) {
    if (i !== 0 && word[i - 1] === word[i] - 1) {
      i += 2
      continue
    }
    if (i !== word.length - 3 && word[i + 2] === word[i + 3] - 1) {
      i += 3
      continue
    }
    i += 2
    answer++
  }
}
console.log(answer)
