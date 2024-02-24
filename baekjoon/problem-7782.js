let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let b1 = Number(input[1].split(' ')[0])
let b2 = Number(input[1].split(' ')[1])
for (let i = 2; i<= n+1; i++) {
  let lx = Number(input[i].split(' ')[0])
  let ly = Number(input[i].split(' ')[1])
  let hx = Number(input[i].split(' ')[2])
  let hy = Number(input[i].split(' ')[3])
  if (lx <= b1 && hx >= b1 && ly <= b2 && hy >= b2) {
    return console.log("Yes")
  }
}
console.log("No")