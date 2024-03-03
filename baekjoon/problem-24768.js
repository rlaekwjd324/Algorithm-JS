let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '0 0') {
  let a = Number(input[index].split(' ')[0])
  let b = Number(input[index].split(' ')[1])
  if (a + b === 13) {
    answer += 'Never speak again.\n'
  } else if (a > b) {
    answer += 'To the convention.\n'
  } else if (a === b) {
    answer += 'Undecided.\n'
  } else {
    answer += 'Left beehind.\n'
  }
  index++
}
console.log(answer)
