let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let count = 0
let value = 0
let array = input[1].split(' ')
for (let i = 0; i < n; i++) {
  value += Number(array[i])
  if (value < 0) {
    value = 0
  }
  if (value >= m) {
    count++
  }
}
console.log(count)
