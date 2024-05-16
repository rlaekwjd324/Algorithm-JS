let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let word = 'KOREA'.split('')
let index = 0
for (let i = 0; i < n.length; i++) {
  if (n[i] === word[index % 5]) {
    index++
  }
}
console.log(index)
