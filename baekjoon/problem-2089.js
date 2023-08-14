let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
if(n === 0){
  return console.log(0)
}
let answer = ''
let isMinus = n < 0
n = Math.abs(n)
while(n !== 1) {
  let tempL = n % 2
  if (isMinus) {
    n = n + 1
  }
  n = Math.floor(n / 2)
  isMinus = !isMinus
  answer = tempL + answer
}
answer = '1' + answer
if (isMinus) {
  answer = '1' + answer
}
console.log(answer)
