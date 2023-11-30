let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let subjects = ['Algorithm', 'DataAnalysis', 'ArtificialIntelligence', 'CyberSecurity', 'Network', 'Startup', 'TestStrategy']
let classrooms = ['204', '207', '302', 'B101', '303', '501', '105']
let answer = ''
for (let i = 1; i <= n; i++) {
  let subject = input[i]
  answer += (classrooms[subjects.indexOf(subject)] + '\n')
}
console.log(answer)
