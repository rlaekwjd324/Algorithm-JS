let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let temp = Number(input[i])
  if (temp > 4500) {
    answer += ('Case #' + i + ': Round 1\n')
  }else if (temp > 1000) {
    answer += ('Case #' + i + ': Round 2\n')
  }else if (temp > 25) {
    answer += ('Case #' + i + ': Round 3\n')
  }else {
    answer += ('Case #' + i + ': World Finals\n')
  }
}
console.log(answer)
