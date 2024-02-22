let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[1].split('joi')
let answer = ''
for (let i = 0; i < word.length; i++) {
  answer += word[i]
  if (i < word.length - 1) {
    answer += 'JOI'
  }
}
console.log(answer)
