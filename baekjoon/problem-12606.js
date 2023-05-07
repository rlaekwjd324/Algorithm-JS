let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ')
  line.reverse()
  answer += ('Case #' + i + ': ' + line.join(' ') + '\n')
}
console.log(answer)
