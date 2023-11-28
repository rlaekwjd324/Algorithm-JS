let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let levels = input[1].split(' ')
let answer = ''
for (let i = 0; i < n; i++) {
  if (levels[i] >= 300) {
    answer += (1 + ' ')
  }else if (levels[i] >= 275) {
    answer += (2 + ' ')
  }else if (levels[i] >= 250) {
    answer += (3 + ' ')
  }else {
    answer += (4 + ' ')
  }
}
console.log(answer)
