let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let subjects = input[1].split(' ').map(function (subject) { return parseInt(subject)})
let answer = ''
for (let i = 0; i < k; i++) {
  let d = parseInt(subjects[i] * 100 / n)
  answer += (getD(d) + ' ')
}
console.log(answer)
function getD (d) {
  if (d <= 4) {
    return 1
  }
  if (d <= 11) {
    return 2
  }
  if (d <= 23) {
    return 3
  }
  if (d <= 40) {
    return 4
  }
  if (d <= 60) {
    return 5
  }
  if (d <= 77) {
    return 6
  }
  if (d <= 89) {
    return 7
  }
  if (d <= 96) {
    return 8
  }
  return 9
}
