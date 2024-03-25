let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('')
for (let i = 0; i < word.length; i++) {
  if (word[i] === 'a') {
    word[i] = '4'
  } else if (word[i] === 'e') {
    word[i] = '3'
  }else if (word[i] === 'i') {
    word[i] = '1'
  }else if (word[i] === 'o') {
    word[i] = '0'
  }else if (word[i] === 's') {
    word[i] = '5'
  }
}
console.log(word.join(''))
