let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let max = 0
for (let j = 1; j <= 3; j++) {
  let score = 0
  let nowPosition = j
  for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ').map(function (v) { return parseInt(v);})
    let a = line[0]
    let b = line[1]
    let g = line[2]
    nowPosition = nowPosition === a ? b : (nowPosition === b ? a : nowPosition)
    if (g === nowPosition) {
      score++
    }
  }
  max = Math.max(max, score)
}
console.log(max)
