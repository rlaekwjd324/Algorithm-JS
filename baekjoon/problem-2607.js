let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let word = input[1].split('')
let isRight = new Array(n)
for (let i = 0; i < n; i++) {
  isRight[i] = false
}
let wordAlphabet = new Array(26)
for (let i = 0; i < 26; i++) {
  wordAlphabet[i] = 0
}
for (let i = 0; i < word.length; i++) {
  wordAlphabet[word[i].charCodeAt(0) - 65]++
}
let count = 0
for (let i = 2; i <= n; i++) {
  let tempWordAlphabet = new Array(26)
  let tempWord = input[i].split('')
  let difCount = 0
  for (let i = 0; i < 26; i++) {
    tempWordAlphabet[i] = 0
  }
  for (let i = 0; i < tempWord.length; i++) {
    tempWordAlphabet[tempWord[i].charCodeAt(0) - 65]++
  }
  let sumWord = 0
  let sumTempWord = 0
  for (let i = 0; i < 26; i++) {
    sumTempWord += tempWordAlphabet[i]
    sumWord += wordAlphabet[i]
    if (tempWordAlphabet[i] !== wordAlphabet[i]) {
      difCount += (Math.abs(tempWordAlphabet[i] - wordAlphabet[i]))
      if (Math.abs(tempWordAlphabet[i] - wordAlphabet[i]) >= 2) {
        difCount++
      }
    }
  }
  if (difCount <= 1) {
    count++
  }else if (difCount === 2 && sumTempWord === sumWord) {
    count++
  }
}
console.log(count)
