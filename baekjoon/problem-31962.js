let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let x = Number(input[0].split(' ')[1])
let time = -1
for (let i= 1; i<=n; i++) {
  let b = Number(input[i].split(' ')[0])
  let s = Number(input[i].split(' ')[1])
  if (b+s <= x && time < b) {
    time = b
  }
}
console.log(time)
