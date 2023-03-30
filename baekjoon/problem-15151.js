let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let firstWritenDay = parseInt(input[0].split(' ')[0])
let lastDay = parseInt(input[0].split(' ')[1])
let index = 0
while(lastDay > 0) {
  lastDay -= ((Math.pow(2, index++) * firstWritenDay))
  if (lastDay < 0) {
    index--
  }
}
console.log(index)
