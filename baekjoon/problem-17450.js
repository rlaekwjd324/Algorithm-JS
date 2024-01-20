let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let sV = Number(input[0].split(' ')[0]) * 10
let sW = Number(input[0].split(' ')[1]) * 10
let nV = Number(input[1].split(' ')[0]) * 10
let nW = Number(input[1].split(' ')[1]) * 10
let uV = Number(input[2].split(' ')[0]) * 10
let uW = Number(input[2].split(' ')[1]) * 10
if (sV >= 5000) {
  sV -= 500
}
if (nV >= 5000) {
  nV -= 500
}
if (uV >= 5000) {
  uV -= 500
}
let max = sW / sV
let answer = 'S'
if (max < nW / nV) {
  answer = 'N'
  max = nW / nV
}
if (max < uW / uV) {
  answer = 'U'
}
console.log(answer)
