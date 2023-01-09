let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let password = input[1].split('')
let answer = ''
for (let i = 2; i < m + 2; i++) {
  let word = input[i].split('')
  let index = 0
  for (let j = 0; j < word.length; j++) {
    if (word[j] === password[index]) {
      index++
    }
    if (index === n) {
      break
    }
  }
  answer += ((index === n) + '\n')
}
console.log(answer)
