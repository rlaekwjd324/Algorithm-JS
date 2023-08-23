let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0]
let index = 0
while(word.length > 0) {
  index++
  for (let i = 0; i < index.toString().length; i++) {
    if (index.toString().split('')[i] === word.split('')[0]) {
      word = word.substring(1, word.length)
    }
  }
}
console.log(index)
