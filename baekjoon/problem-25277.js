let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let words = input[1].split(' ')
let count = 0
for (let i = 0;i < n;i++) {
  if (['he', 'him', 'she', 'her'].includes(words[i])) {
    count++
  }
}
console.log(count)
