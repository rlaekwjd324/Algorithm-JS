let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = 0
let l = Number(input[1].split(' ')[0])
let r = Number(input[1].split(' ')[1])
if (r === l && r !== 0) {
  answer++
}
for (let i = 2; i <= t; i++) {
  let ln = Number(input[i].split(' ')[0])
  let rn = Number(input[i].split(' ')[1])
  if (l !== 0 && l === ln) {
    answer++
  }
  if (r !== 0 && r === rn) {
    answer++
  }
  if (rn === ln && rn !== 0) {
    answer++
  }
  l = ln
  r = rn
}
console.log(answer)
