let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0 0') {
  let a = Number(input[index].split(' ')[0])
  let b = Number(input[index].split(' ')[1])
  answer += ((3 * a - a - b) + '\n')
  index++
}
console.log(answer)
