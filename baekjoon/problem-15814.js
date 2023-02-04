let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('')
let n = parseInt(input[1])
for (let i = 2; i < n + 2; i++) {
  let a = parseInt(input[i].split(' ')[0])
  let b = parseInt(input[i].split(' ')[1])
  let temp = word[a]
  word[a] = word[b]
  word[b] = temp
}
console.log(word.join(''))
