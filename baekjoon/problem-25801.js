let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let array = []
for (let i = 0; i < 26; i++) {
  array.push(0)
}
for (let i = 0; i < n.length; i++) {
  array[n[i].charCodeAt(0) - 97]++
}
let answer = -1
for (let i = 0; i < 26; i++) {
  if (array[i] > 0) {
    if(array[i] %2 === 0 && answer === 1) {
      return console.log('0/1')
    }
    if(array[i] %2 === 1 && answer === 0) {
      return console.log('0/1')
    }
    answer = array[i]%2
  }
}
console.log(answer)