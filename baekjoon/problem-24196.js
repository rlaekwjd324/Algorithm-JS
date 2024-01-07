let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let answer = n[0]
let index = 0
while(true) {
  let temp = n[index].charCodeAt(0) - 64
  index+=temp
  if(index >= n.length) {
    return console.log(answer)
  }
  answer += n[index]
}
