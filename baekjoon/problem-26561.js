let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i= 1; i<=n; i++) {
  let p = Number(input[i].split(' ')[0])
  let t = Number(input[i].split(' ')[1])
  p -= Math.floor(t/7)
  p += Math.floor(t/4)
  answer += (p + '\n')
}
console.log(answer)
