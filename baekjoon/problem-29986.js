let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let h = Number(input[0].split(' ')[1])
let heights = input[1].split(' ')
let count = 0
for (let i = 0; i < n; i++) {
  if (h >= heights[i]) {
    count++
  }
}
console.log(count)
