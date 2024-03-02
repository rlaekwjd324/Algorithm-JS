let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let array = new Array(26)
for (let i = 0; i < 26; i++) {
  array[i] = 0
}
for (let i = 0; i < n.length; i++) {
  array[n[i].charCodeAt(0) - 97]++
}
let answer = -1
for (let i = 0; i < 26; i++) {
  if(array[i] === 0) {
    continue
  }
  if(answer === 0) {
    if(array[i]%2 === 1) {
      return console.log(2)
    }
  }else if(answer === 1) {
    if(array[i]%2 === 0) {
      return console.log(2)
    }
  }
  answer = array[i]%2
}
console.log(answer)