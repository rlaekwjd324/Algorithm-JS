let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 0; i < n; i++) {
  let sung = input[i * 2 + 1]
  let name = input[i * 2 + 2]
  answer += ('Case ' + (i + 1) + ': ' + name + ', ' + sung + '\n')
}
console.log(answer)
