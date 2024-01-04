let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = input[1].split('')
let count = []
for (let i = 0; i < 26; i++) {
  count.push(0)
}
for (let i = 0; i < array.length; i++) {
  if (array[i].charCodeAt(0) >= 97 && array[i].charCodeAt(0) <= 122) {
    count[array[i].charCodeAt(0) - 97]++
  }
}
count.sort(function (a, b) { return b - a})
console.log(count[0])
