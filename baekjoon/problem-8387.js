let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let original = input[1].split('')
let recent = input[2].split('')
let count = 0
for (let i = 0; i < n; i++) {
  if (original[i] === recent[i]) {
    count++
  }
}
console.log(count)
