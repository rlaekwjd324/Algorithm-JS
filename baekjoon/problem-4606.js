let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
let preWord = [' ', '!', '$', '%', '(', ')', '*']
let postWord = ['%20', '%21', '%24', '%25', '%28', '%29', '%2a']
while(input[index] !== '#') {
  let line = input[index].split('')
  for (let i = 0; i < line.length; i++) {
    let k = preWord.indexOf(line[i])
    if (k != -1) {
      line[i] = postWord[k]
    }
  }
  answer += (line.join('') + '\n')
  index++
}
console.log(answer)
