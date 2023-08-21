let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let index = 1
let answer = ''
while(input[index] !== '0') {
  let num = Number(input[index])
  if (num % n === 0) {
    answer += (num + ' is a multiple of ' + n + '.\n')
  }else {
    answer += (num + ' is NOT a multiple of ' + n + '.\n')
  }
  index++
}
console.log(answer)