let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let times = input[1].split(' ').map(function (v) { return parseInt(v)})
let allTime = 0
for (let i = 0; i < n; i++) {
  allTime += times[i]
  allTime += 8
}
allTime -= 8
console.log(parseInt(allTime / 24) + ' ' + (allTime % 24))
