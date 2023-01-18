let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let keys = new Array(n)
let values = new Array(n)
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ')
  keys[i - 1] = line[0]
  values[i - 1] = line[1]
}
let word = input[n + 1].split('')
let preWord = ''
for (let i = 0; i < word.length; i++) {
  preWord += keys[values.indexOf(word[i])]
}
console.log(preWord.substring(parseInt(input[n + 2].split(' ')[0]) - 1, parseInt(input[n + 2].split(' ')[1])))
