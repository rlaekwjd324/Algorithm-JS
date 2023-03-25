let fs = require('fs')
// let word = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]
let word = fs.readFileSync('test.txt').toString().trim().split('\n')[0]
let array = new Array(word.length)
for (let i = 0; i < word.length; i++) {
  array[i] = {}
  array[i].word = word.substring(0, i + 1)
  array[i].index = i
}
let answer = ''
for (let i = 0; i < word.length;i++) {
  answer += (array[i].index + '\n')
}
console.log(answer)
