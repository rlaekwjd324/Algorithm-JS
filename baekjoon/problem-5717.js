let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0 0'){
  let m = parseInt(input[index].split(' ')[0])
  let f = parseInt(input[index].split(' ')[1])
  answer += ((m + f) + '\n')
  index++
}
console.log(answer)
