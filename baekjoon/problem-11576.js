let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let x = parseInt(input[0].split(' ')[1])
let answer = 1
let voices = input[1].split(' ').map(function (v) { return parseInt(v)})
if (x <= voices[0]) {
  let i = 0
  while (true) {
    i = (i + 1) % n
    if (x >= voices[i]) {
      answer = i + 1
      break
    }
    x = x + 1
  }
}
console.log(answer)
