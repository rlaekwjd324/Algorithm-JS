let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let yValue = 0
let mValue = 0
let seconds = input[1].split(' ').map(function (v) {return parseInt(v)})
for (let i = 0; i < n; i++) {
  yValue += (10 * (parseInt(seconds[i] / 30) + 1))
  mValue += (15 * (parseInt(seconds[i] / 60) + 1))
}
console.log(yValue === mValue ? 'Y M ' + mValue : (yValue > mValue ? 'M ' + mValue : 'Y ' + yValue))
