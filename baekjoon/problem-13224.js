let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('')
let position = 1
for (let i = 0; i < word.length;i++) {
  switch (word[i]) {
    case 'A':
      if (position === 1) {
        position = 2
      } else if (position === 2) {
        position = 1
      }
      break
    case 'B':
      if (position === 2) {
        position = 3
      } else if (position === 3) {
        position = 2
      }
      break
    case 'C':
      if (position === 1) {
        position = 3
      } else if (position === 3) {
        position = 1
      }
      break
  }
}
console.log(position)
