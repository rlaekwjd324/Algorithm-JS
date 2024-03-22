let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let word = input[1].split('')
let count = [0, 0, 0]
let index = 0
for (let i = 0; i < n; i++) {
  if (word[i] === 'L') {
    if (index === 0) {
      count[index]++
    }else {
      index--
      count[index]++
    }
  }else {
    if (index === 2) {
      count[index]++
    }else {
      index++
      count[index]++
    }
  }
}
console.log(count[2])
