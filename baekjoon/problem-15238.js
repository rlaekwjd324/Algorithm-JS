let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let word = input[1].split('')
let array = new Array(26)
for (let i = 0; i < 26; i++) {
  array[i] = 0
}
for (let i = 0; i < n; i++) {
  let index = word[i].charCodeAt(0) - 97
  array[index]++
}
let max = 0
let maxAlphabet = ''
for (let i = 0; i < 26; i++) {
  if (max < array[i]) {
    max = array[i]
    maxAlphabet = String.fromCharCode(parseInt(i + 97))
  }
}
console.log(maxAlphabet + ' ' + max)
