let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let length = Number(input[i * 2 - 1])
  answer += ('Case #' + i + ': ')
  let temp = input[i * 2].split('')
  for (let j = 0; j < length; j++) {
    let number = 0
    for (let k = 0; k < 8; k++) {
      number += (temp[j * 8 + k] === 'O' ? 0 : Math.pow(2, 7 - k))
    }
    answer += (String.fromCharCode(number))
  }
  answer += '\n'
}
console.log(answer)
