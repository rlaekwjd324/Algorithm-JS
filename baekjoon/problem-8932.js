let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
let a = [9.23076, 1.84523, 56.0211, 4.99087, 0.188807, 15.9803, 0.11193]
let b = [26.7, 75, 1.5, 42.5, 210, 3.8, 254]
let c = [1.835, 1.348, 1.05, 1.81, 1.41, 1.04, 1.88]
let type = [1, 0, 0, 1, 0, 0, 1]
for (let i = 1; i <= t; i++) {
  let array = input[i].split(' ').map(function (v) {return Number(v)})
  let score = 0
  for (let j = 0; j < 7; j++) {
    if (type[j] === 1) {
      score += parseInt(a[j] * Math.pow(b[j] - array[j], c[j]))
    }else {
      score += parseInt(a[j] * Math.pow(array[j] - b[j], c[j]))
    }
  }
  answer += (score + '\n')
}
console.log(answer)
