let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let crewNames = ['PROBRAIN', 'GROW', 'ARGOS', 'ADMIN', 'ANT', 'MOTION', 'SPG', 'COMON', 'ALMIGHTY']
let max = 0
let answer = ''
for (let i = 1; i <= 9; i++) {
  for (let j = 0; j <= n; j++) {
    if (max < parseInt(input[i].split(' ')[j])) {
      max = parseInt(input[i].split(' ')[j])
      answer = crewNames[i - 1]
    }
  }
}
console.log(answer)
