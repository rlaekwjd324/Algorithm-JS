let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
for (let i = 0; i < input.length; i++) {
  let name = input[i].split('')
  for (let j = 0; j < name.length; j++) {
    switch (name[j]) {
      case 'i':
        answer += 'e'
        break
      case 'e':
        answer += 'i'
        break
      case 'I':
        answer += 'E'
        break
      case 'E':
        answer += 'I'
        break
      default:
        answer += name[j]
    }
  }
  answer += '\n'
}
console.log(answer)
