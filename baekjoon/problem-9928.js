let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let sum = Number(input[i])
  answer += ('Case ' + i + ':\n')
  for (let j = 1; j <= parseInt(sum) / 2; j++) {
    if (sum - j > 6) {
      continue
    }
    answer += ('(' + j + ',' + (sum - j) + ')\n')
  }
}
console.log(answer)
