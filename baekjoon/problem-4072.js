let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '#') {
  let words = input[index].split(' ')
  for (let word of words) {
    answer += (word.split('').reverse().join('') + ' ')
  }
  answer += '\n'
  index++
}
console.log(answer)
