let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 1
let problem = 0
while (input[index] != '고무오리 디버깅 끝') {
  if (input[index] === '고무오리') {
    if (problem === 0) {
      problem += 2
    }else {
      problem--
    }
  }else {
    problem++
  }
  index++
}
if (problem === 0) {
  return console.log('고무오리야 사랑해')
}
console.log('힝구')