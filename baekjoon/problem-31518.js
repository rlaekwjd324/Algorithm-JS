let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
for (let i=1; i<=3; i++) {
  let array = input[i].split(' ')
  if (array.indexOf('7')===-1) {
    return console.log(0)
  }
}
console.log(777)
