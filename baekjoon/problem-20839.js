let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let x = Number(input[0].split(' ')[0])
let y = Number(input[0].split(' ')[1])
let z = Number(input[0].split(' ')[2])
let x1 = Number(input[1].split(' ')[0])
let y1 = Number(input[1].split(' ')[1])
let z1 = Number(input[1].split(' ')[2])
if(z===z1) {
  if(y === y1) {
    if(x === x1) {
      return console.log('A')
    }
    if(x/2 <= x1) {
      return console.log('B')
    }
    return console.log('C')
  }
  if(y/2<=y1) {
    return console.log('D')
  }
  return console.log('E')
}
