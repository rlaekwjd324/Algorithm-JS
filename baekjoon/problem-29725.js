let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = []
for (let i = 0; i < 8; i++) {
  array.push(input[i].split(''))
}
let count = [0, 0, 0, 0, 0, 0]
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    switch (array[i][j]) {
      case 'k':
        count[0]--
        break
      case 'K':
        count[0]++
        break
      case 'p':
        count[1]--
        break
      case 'P':
        count[1]++
        break
      case 'n':
        count[2]--
        break
      case 'N':
        count[2]++
        break
      case 'b':
        count[3]--
        break
      case 'B':
        count[3]++
        break
      case 'r':
        count[4]--
        break
      case 'R':
        count[4]++
        break
      case 'q':
        count[5]--
        break
      case 'Q':
        count[5]++
        break
    }
  }
}
let sum = 0
let scores = [0, 1, 3, 3, 5, 9]
for (var i = 0; i < 6; i++) {
  sum += count[i] * scores[i]
}
console.log(sum)
