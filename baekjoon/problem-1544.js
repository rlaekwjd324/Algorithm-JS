let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let words = []
for (let i = 1; i <= n; i++) {
  let word = input[i]
  let existWord = false
  for (let j = 0; j < words.length; j++) {
    let tempWord = words[j]
    if (tempWord.length !== word.length) {
      continue
    }
    let index = []
    for (let k = 0; k < word.length; k++) {
      if (word[k] === tempWord[0]) {
        index.push(k)
      }
    }
    for (let k = 0; k < index.length; k++) {
      if (word.substring(index[k], word.length) + word.substring(0, index[k]) === tempWord) {
        existWord = true
        break
      }
    }
  }
  if (!existWord) {
    words.push(word)
  }
}
console.log(words.length)
