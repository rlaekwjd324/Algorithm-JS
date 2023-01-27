let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n; i++) {
  let m = parseInt(input[i * 2 + 1].split(' ')[0])
  let problemType = input[i * 2 + 1].split(' ')[1]
  let words = input[i * 2 + 2].split(' ')
  switch (problemType) {
    case 'C':
      for (let j = 0; j < m; j++) {
        answer += (words[j].charCodeAt(0) - 64 + ' ')
      }
      break
    case 'N':
      for (let j = 0; j < m; j++) {
        answer += (String.fromCharCode(parseInt(words[j]) + 64) + ' ')
      }
      break
  }
  answer += '\n'
}
console.log(answer)
