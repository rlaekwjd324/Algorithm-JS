let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0
let room = ''
for (let i=0; i<7; i++) {
  let m = input[i].split(' ')[0]
  let n = Number(input[i].split(' ')[1])
  if (n > count) {
    room = m
    count = n
  }
}
console.log(room)
