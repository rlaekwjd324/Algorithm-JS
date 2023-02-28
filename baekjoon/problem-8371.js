let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let count = 0
let aArray = input[1].split('')
let bArray = input[2].split('')
for (let i = 0; i < n; i++) {
  if (aArray[i] !== bArray[i]) {
    count++
  }
}
console.log(count)
