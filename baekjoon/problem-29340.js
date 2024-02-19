let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let m = input[1].split('')
let answer = ''
for (let i = 0; i < n.length; i++) {
  answer += (Number(n[i]) > Number(m[i]) ? Number(n[i]) : Number(m[i]))
}
console.log(answer)
