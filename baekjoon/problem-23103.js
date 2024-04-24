let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let dis = 0
let a = input[1].split(' ')[0]
let b = input[1].split(' ')[1]
for (let i = 2; i <= n; i++) {
  let tempA = input[i].split(' ')[0]
  let tempB = input[i].split(' ')[1]
  dis += (Math.abs(tempA - a) + Math.abs(tempB - b))
  a = tempA
  b = tempB
}
console.log(dis)
