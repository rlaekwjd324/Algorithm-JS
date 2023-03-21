let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 0; i < t; i++) {
  let n = parseInt(input[i * 2 + 1])
  let line = input[i * 2 + 2].split(' ').map(function (v) {return parseInt(v)})
  let count = 0
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < j; k++) {
      if (line[j] >= line[k]) {
        count++
      }
    }
  }
  answer += (count + '\n')
}
console.log(answer)
