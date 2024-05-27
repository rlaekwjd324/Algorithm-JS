let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let x = Number(input[1].split(' ')[0])
let s = Number(input[1].split(' ')[1])
for (let i = 0; i < n; i++) {
  let c = Number(input[i+2].split(' ')[0])
  let p = Number(input[i+2].split(' ')[1])
  if(c <= x && s<p) {
    return console.log('YES')
  }
}
console.log('NO')