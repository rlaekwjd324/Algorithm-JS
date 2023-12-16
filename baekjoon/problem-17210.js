let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
if(n>=6) {
  return console.log('Love is open door')
}
let temp = input[1]
let answer = ''
for(let i = 1; i < n; i++) {
  temp= temp === '1' ? '0' : '1'
  answer+= (temp+'\n')
}
console.log(answer)