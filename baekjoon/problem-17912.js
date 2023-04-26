let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let line = input[1].split(' ').map(function (v) { return Number(v)})
let min = line[0]
let minDay = 0
for (let i = 1; i < n; i++) {
  if (min > line[i]) {
    min = line[i]
    minDay = i
  }
}
console.log(minDay)
