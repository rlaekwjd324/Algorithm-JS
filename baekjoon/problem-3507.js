let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let count = 0
for (let i = 99; i >= 1; i--) {
  if (i + 99 >= n) {
    count++
  }else {
    break
  }
}
console.log(count)
