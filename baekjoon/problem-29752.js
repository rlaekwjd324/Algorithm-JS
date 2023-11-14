let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let s = input[1].split(' ').map(function (v) { return Number(v)})
let count = 0
let max = 0
for (let i = 0; i < n; i++) {
  if (s[i] === 0) {
    max = Math.max(max, count)
    count = 0
    continue
  }
  count++
}
max = Math.max(max, count)
console.log(max)
