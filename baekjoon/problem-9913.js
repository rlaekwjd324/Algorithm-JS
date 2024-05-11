let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let array = []
let count = []
for (let i = 1; i <= n; i++) {
  if (array.includes(input[i])) {
    count[array.indexOf(input[i])]++
  } else {
    array.push(input[i])
    count.push(1)
  }
}
count.sort(function (a, b) {return b - a})
console.log(count[0])
