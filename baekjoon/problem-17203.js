let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let q = parseInt(input[0].split(' ')[1])
let speeds = input[1].split(' ').map(function (v) {return parseInt(v)})
let sumSpeeds = new Array(n)
sumSpeeds[0] = 0
for (let i = 1; i < n; i++) {
  sumSpeeds[i] = (sumSpeeds[i - 1] + Math.abs(speeds[i] - speeds[i - 1]))
}
let answer = ''
for (let i = 2; i < q + 2; i++) {
  let ql = parseInt(input[i].split(' ')[0]) - 1
  let qr = parseInt(input[i].split(' ')[1]) - 1
  answer += (sumSpeeds[qr] - sumSpeeds[ql] + '\n')
}
console.log(answer)
