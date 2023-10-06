let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let a = Number(input[0].split(' ')[1])
let nFac = getFac(n)
let k = 0
let tempA = 0
while(Math.pow(a, tempA) < nFac) {
  tempA++
  if (nFac % Math.pow(a, tempA) === 0) {
    k = tempA
  }
}
console.log(k)
function getFac (num) {
  let count = 0
  for (let i = a; i <= num; i++) {
    if (i % a === 0) {
    }
  }
  return temp
}
