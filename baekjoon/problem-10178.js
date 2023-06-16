let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let c = parseInt(input[i].split(' ')[0])
  let v = parseInt(input[i].split(' ')[1])
  answer += ('You get ' + parseInt(c / v) + ' piece(s) and your dad gets ' + (c % v) + ' piece(s).\n')
}
console.log(answer)
