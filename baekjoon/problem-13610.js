let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let x = Number(input[0].split(' ')[0])
let y = Number(input[0].split(' ')[1])
let index=0
while(true) {
  index++
  if((index-1)>(x/y*index)) {
    return console.log(index)
  }
  if(x/y*index%1 === 0) {
    return console.log(index)
  }
}