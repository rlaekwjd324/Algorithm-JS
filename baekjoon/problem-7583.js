let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '#') {
  let words = input[index].split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split('')
    for (let j = 1; j < parseInt(word.length / 2); j++) {
      let temp = word[j]
      word[j] = word[word.length - j - 1]
      word[word.length - j - 1] = temp
    }
    answer += (word.join('') + ' ')
  }
  answer += '\n'
  index++
}
console.log(answer)
