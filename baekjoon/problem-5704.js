let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '*') {
  let alphabet = new Array(26)
  let str = input[index]
  str = str.replaceAll(' ', '')
  let line = str.split('')
  for (let i = 0; i < 26; i++) {
    alphabet[i] = false
  }
  for (let i = 0; i < line.length; i++) {
    alphabet[line[i].charCodeAt(0) - 97] = true
  }
  let isNotExistAllAlphabet = false
  for (let i = 0; i < 26; i++) {
    if (!alphabet[i]) {
      isNotExistAllAlphabet = true
    }
  }
  if (isNotExistAllAlphabet) {
    answer += 'N\n'
  }else {
    answer += 'Y\n'
  }
  index++
}
console.log(answer)
