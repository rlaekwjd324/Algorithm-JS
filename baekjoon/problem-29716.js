let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let j = Number(input[0].split(' ')[0])
let n = Number(input[0].split(' ')[1])
let count = 0
for (let i = 1; i <= n; i++) {
  let array = input[i].split('')
  let sum = 0
  for (let j = 0; j < array.length; j++) {
    if (array[j] === ' ') {
      sum += 1
    } else if (array[j].charCodeAt(0) >= 97) {
      sum += 2
    }else if (array[j].charCodeAt(0) >= 65) {
      sum += 4
    }else {
      sum += 2
    }
  }
  if (sum <= j) {
    count++
  }
}
console.log(count)
