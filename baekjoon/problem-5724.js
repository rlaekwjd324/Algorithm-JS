let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0') {
  let number = parseInt(input[index])
  let count = 0
  for (let i = 1; i <= number; i++) {
    count += i * i
  }
  answer += (count + '\n')
  index++
}
console.log(answer)
