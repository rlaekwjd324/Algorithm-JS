let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let scores = input[1].split(' ').map(function (v) {return parseInt(v)})
let aPercent = parseInt(input[2].split(' ')[0])
let aScore = parseInt(input[2].split(' ')[1])
let aScoreCount = 0
for (let i = 0; i < n; i++) {
  if (aScore <= scores[i]) {
    aScoreCount++
  }
}
console.log((n * aPercent / 100) + ' ' + aScoreCount)
