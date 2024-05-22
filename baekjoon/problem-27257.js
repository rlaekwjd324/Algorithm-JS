let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let count = 0
let length = n.length
for (let i = 0; i < length; i++) {
  if (n[length - 1 - i] !== '0') {
    break
  }
  n.splice(length - i - 1, 1)
}
for (let i = 1; i < n.length; i++) {
  if (n[i] === '0') {
    count++
  }
}
console.log(count)
