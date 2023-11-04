let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let word = input[i].split('')
  for (let j = 0; j < word.length; j++) {
    if (word[j].charCodeAt(0) >= 65 && word[j].charCodeAt(0) <= 90) {
      word[j] = String.fromCharCode(word[j].charCodeAt(0) + 32)
    }
  }
  answer += (word.join('') + '\n')
}
console.log(answer)
