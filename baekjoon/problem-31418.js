let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = input[1].split(' ')
array.sort()
let hello = input[2]
let count = 0
for (let i = 0; i < n; i++) {
  if (array[i] === hello) {
    count++
  }
}
console.log(count)
