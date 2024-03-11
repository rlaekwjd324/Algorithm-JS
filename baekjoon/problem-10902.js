let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let m = Number(input[0])
let maxS = 0
let f = 0
let tempT = 0
for (let i = 1; i <= m; i++) {
  let t = Number(input[i].split(' ')[0])
  let s = Number(input[i].split(' ')[1])
  if(maxS < s) {
    maxS = s
    f = i
    tempT = t
  }
}
if(maxS===0) {
  return console.log('0')
}
if(maxS === 1 || maxS === 4) {
  return console.log((tempT+ (f - 1) * 20))
}