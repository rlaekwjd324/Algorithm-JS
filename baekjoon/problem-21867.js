let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let word = input[1].split('')
let answer = ''
for (let i = 0; i < n; i++) {
  if(!['J','A','V'].includes(word[i])) {
    answer+=word[i]
  }
}
if (answer.length === 0)
  return console.log('nojava')
console.log(answer)
