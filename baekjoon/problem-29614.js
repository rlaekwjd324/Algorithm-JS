let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('+')
let sum = 0
let count = 0
for (let i = 0; i < word.length; i++) {
  let value = word[i].split('')
  for (let j = 0; j < value.length; j++) {
    count++
    switch (value[j]) {
      case 'A':
        sum += 4
        break
      case 'B':
        sum += 3
        break
      case 'C':
        sum += 2
        break
      case 'D':
        sum += 1
        break
      case 'F':
        sum += 0
        break
    }
  }
  sum += 0.5
}
sum -= 0.5
console.log(Math.floor((sum / count) * 100000) / 100000)
