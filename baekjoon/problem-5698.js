let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '*') {
  let words = input[index].split(' ')
  let firstAlphabet = words[0].charCodeAt(0)
  for (let i = 1; i < words.length; i++) {
    if (firstAlphabet !== words[i].charCodeAt(0) && (firstAlphabet !== words[i].charCodeAt(0) + 32) && (firstAlphabet !== words[i].charCodeAt(0) - 32)) {
      answer += 'N\n'
      break
    }
    if (i === words.length - 1) {
      answer += 'Y\n'
    }
  }
  index++
}
console.log(answer)
