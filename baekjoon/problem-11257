let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n; i++) {
  let line = input[i + 1].split(' ')
  let isPass = false
  if (parseInt(line[1]) + parseInt(line[2]) + parseInt(line[3]) >= 55 &&
    parseInt(line[1]) >= 10.5 && parseInt(line[2]) >= 7.5 && parseInt(line[3]) >= 12) {
    isPass = true
  }
  answer += (line[0] + ' ' + (parseInt(line[1]) + parseInt(line[2]) + parseInt(line[3])) + (isPass ? ' PASS' : ' FAIL') + '\n')
}
console.log(answer)
