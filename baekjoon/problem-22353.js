let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let d = Number(input[0].split(' ')[1]) * 0.01
let k = Number(input[0].split(' ')[2]) * 0.01

let cnt = 1
let alpha = d
let result = 0
let next = 1

while(true) {
  if (alpha >= 1) {
    break
  }
  result += (a * cnt) * next * alpha
  next *= (1 - alpha)
  alpha *= (1 + k)
  cnt += 1
}
result += (a * cnt) * next
console.log((Math.floor(result * 10000000) / 10000000).toFixed(7))
