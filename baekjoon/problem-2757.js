let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index].split('R')[1].split('C')[0] !== '0' || input[index].split('C')[1] !== '0') {
  let r = Number(input[index].split('R')[1].split('C')[0])
  let c = Number(input[index].split('C')[1])
  let word = ''
  let l = c % 26 === 0 ? 26 : c % 26
  while(c > 26) {
    let tempL = c % 26 === 0 ? 26 : c % 26
    let temp = parseInt((c - tempL) / 26) % 26
    if (temp === 0) {
      temp = 26
    }
    word = String.fromCharCode(temp + 64) + word
    c = parseInt((c - tempL) / 26)
  }
  word += String.fromCharCode(l + 64)
  answer += (word + r + '\n')
  index++
}
console.log(answer)
