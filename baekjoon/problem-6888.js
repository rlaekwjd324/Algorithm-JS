let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let x = parseInt(input[0])
let y = parseInt(input[1])
let answer = ''
while(x <= y) {
  answer += ('All positions change in year ' + x + '\n')
  x += 60
}
console.log(answer)
