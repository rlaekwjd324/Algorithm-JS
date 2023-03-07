let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(function (v) { return parseInt(v)})
let input = fs.readFileSync('test.txt').toString().trim().split('\n').map(function (v) { return parseInt(v)})
let max = 0
for (let i = 0; i < 8; i++) {
  max = Math.max(max, (input[i % 8] + input[(i + 1) % 8] + input[(i + 2) % 8] + input[(i + 3) % 8]))
}
console.log(max)
